#!/usr/bin/env node

/**
 * Auto-switch between TinaCloud and local mode.
 * If NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN are present, run in cloud mode.
 * Otherwise pass --local --skip-cloud-checks to tinacms CLI automatically.
 */

const { execSync } = require('child_process');
const path = require('path');

const hasCloudCredentials = Boolean(
  process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN
);

const args = process.argv.slice(2);

if (hasCloudCredentials) {
  console.log('✅ TinaCloud credentials detected — running in cloud mode.');
} else {
  console.log('⚠️  No TinaCloud credentials found — running in local mode.');
  if (!args.includes('--local')) args.push('--local');
  if (!args.includes('--skip-cloud-checks')) args.push('--skip-cloud-checks');
}

// Only modify process.env if the script is invoked with arguments (CLI wrapper mode).
if (args.length > 0) {
  const bin = path.resolve(__dirname, '../node_modules/.bin/tinacms');
  const cmd = `${bin} ${args.join(' ')}`;
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    process.exit(err.status || 1);
  }
}
