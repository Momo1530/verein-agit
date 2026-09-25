#!/usr/bin/env python3
"""
GitHub Webhook listener for verein-agit.at
Listens on port 5000 for push events on branch 'main',
then pulls, builds and deploys via FTP.
"""

import hmac
import hashlib
import json
import os
import subprocess
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

# Line-buffered output so systemd/journald receives log lines immediately.
try:
    sys.stdout.reconfigure(line_buffering=True)
    sys.stderr.reconfigure(line_buffering=True)
except Exception:
    pass

REPO_DIR = Path(__file__).resolve().parent.parent
ENV_FILE = REPO_DIR / '.env'
PORT = 5000
WEBHOOK_PATH = '/webhook'
REQUIRED_BRANCH = 'main'
NPM_BIN = os.environ.get('NPM_BIN', str(Path.home() / '.local/bin/npm'))

def load_env():
    """Load KEY=VALUE pairs from .env into os.environ."""
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            key, _, value = line.partition('=')
            os.environ.setdefault(key, value)

load_env()

SECRET = os.environ.get('GITHUB_WEBHOOK_SECRET', '').encode()
FTP_PASSWORD = os.environ.get('FTP_PASSWORD', '')
FTP_USER = 'vereinagit.at'
FTP_HOST = '913.hosttech.eu'
FTP_REMOTE_DIR = '/httpdocs/'


def run(cmd, cwd=None):
    print(f"[RUN] {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=cwd, text=True, capture_output=True)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)
    if result.returncode != 0:
        raise RuntimeError(f"Command failed: {' '.join(cmd)} (exit {result.returncode})")
    return result


def deploy():
    """Pull latest main, build and deploy via FTP."""
    try:
        run(['git', 'fetch', 'origin'], cwd=REPO_DIR)
        run(['git', 'reset', '--hard', 'origin/main'], cwd=REPO_DIR)
        run([NPM_BIN, 'install'], cwd=REPO_DIR)
        run([NPM_BIN, 'run', 'build'], cwd=REPO_DIR)

        out_dir = REPO_DIR / 'out'
        if not out_dir.exists():
            raise RuntimeError('Build output folder "out/" not found')

        lftp_script = """set ftp:charset utf8
set sftp:auto-confirm yes
set net:max-retries 3
open -u {user},{password} {host}
mirror -R --delete {out_dir}/ {remote_dir}
bye
""".format(
            user=FTP_USER,
            password=FTP_PASSWORD,
            host=FTP_HOST,
            out_dir=out_dir,
            remote_dir=FTP_REMOTE_DIR,
        )
        # Write script to a temp file with restricted permissions to avoid exposing
        # the password in /proc/*/cmdline or process listings.
        import tempfile
        with tempfile.NamedTemporaryFile('w', suffix='.lftp', delete=False) as f:
            f.write(lftp_script)
            lftp_script_path = f.name
        try:
            os.chmod(lftp_script_path, 0o600)
            subprocess.run(['lftp', '-f', lftp_script_path], cwd=REPO_DIR, check=True)
        finally:
            try:
                os.unlink(lftp_script_path)
            except OSError:
                pass

        print('[OK] Deploy complete')
    except Exception as e:
        print(f'[ERROR] Deploy failed: {e}', file=sys.stderr)
        raise


class WebhookHandler(BaseHTTPRequestHandler):
    def _send(self, code, body=b''):
        self.send_response(code)
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        self._send(200, b'Verein Agit Webhook Listener')

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)

        signature = self.headers.get('X-Hub-Signature-256', '')
        event = self.headers.get('X-GitHub-Event', '')
        sender = self.headers.get('User-Agent', '?')
        print(f'[REQ] path={self.path} event={event!r} ua={sender!r} len={len(body)} sig={signature[:20]}')

        if self.path != WEBHOOK_PATH:
            self._send(404, b'Not found')
            return

        if SECRET:
            expected = 'sha256=' + hmac.new(SECRET, body, hashlib.sha256).hexdigest()
            if not hmac.compare_digest(expected, signature):
                self._send(401, b'Invalid signature')
                return

        if event != 'push':
            self._send(200, b'Event ignored')
            return

        try:
            payload = json.loads(body)
            ref = payload.get('ref', '')
            if ref != f'refs/heads/{REQUIRED_BRANCH}':
                self._send(200, f'Ignored ref {ref}'.encode())
                return

            # Run deploy in a forked process so the HTTP response returns quickly.
            pid = os.fork()
            if pid == 0:
                try:
                    deploy()
                except Exception as e:
                    print(f'[ERROR] {e}', file=sys.stderr)
                finally:
                    os._exit(0)

            self._send(202, b'Deploy triggered')
        except json.JSONDecodeError:
            self._send(400, b'Invalid JSON')
        except Exception as e:
            print(f'[ERROR] {e}', file=sys.stderr)
            self._send(500, b'Internal error')

    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")


def main():
    if not SECRET:
        print('WARNING: GITHUB_WEBHOOK_SECRET is not set. Webhook signatures will not be verified.', file=sys.stderr)
    if not FTP_PASSWORD:
        print('ERROR: FTP_PASSWORD is not set in .env', file=sys.stderr)
        sys.exit(1)

    server = HTTPServer(('0.0.0.0', PORT), WebhookHandler)
    print(f'Webhook listener running on http://0.0.0.0:{PORT}{WEBHOOK_PATH}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nShutting down...')
        server.shutdown()


if __name__ == '__main__':
    main()
