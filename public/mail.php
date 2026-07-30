<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://verein-agit.at');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Nur POST erlaubt.']);
    exit;
}

// --- Referer-Check: POST muss von eigener Domain kommen ---
$allowedOrigin = 'https://verein-agit.at';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
if (!str_starts_with($referer, $allowedOrigin)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Ungültiger Ursprung.']);
    exit;
}

// --- Honeypot-Feld prüfen ---
$honeypot = trim($_POST['website'] ?? '');
if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige Anfrage.']);
    exit;
}

// --- Rate-Limit pro IP: max 3 Mails pro 10 Minuten ---
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitDir = sys_get_temp_dir() . '/agit_ratelimit';
if (!is_dir($rateLimitDir)) {
    mkdir($rateLimitDir, 0750, true);
}
$rateLimitFile = $rateLimitDir . '/' . preg_replace('/[^a-zA-Z0-9.:]/', '_', $clientIp) . '.json';
$windowSeconds = 600;
$maxAttempts = 3;

$attempts = [];
if (file_exists($rateLimitFile)) {
    $content = file_get_contents($rateLimitFile);
    if ($content !== false) {
        $data = json_decode($content, true);
        if (is_array($data)) {
            $cutoff = time() - $windowSeconds;
            $attempts = array_values(array_filter($data, fn($t) => is_int($t) && $t > $cutoff));
        }
    }
}

if (count($attempts) >= $maxAttempts) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Zu viele Versuche. Bitte versuchen Sie es später erneut.']);
    exit;
}

// --- Cloudflare Turnstile verifizieren ---
$turnstileSecret = '0x4AAAAAAECHdJhrjw47AVwdjNu0-Z5VXOE';
$turnstileToken = trim($_POST['cf-turnstile-response'] ?? '');

if ($turnstileToken === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Sicherheitsprüfung fehlgeschlagen.']);
    exit;
}

$verifyData = http_build_query([
    'secret' => $turnstileSecret,
    'response' => $turnstileToken,
    'remoteip' => $clientIp,
]);

$ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $verifyData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$verifyResponse = curl_exec($ch);
$verifyError = curl_error($ch);
curl_close($ch);

if ($verifyResponse === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Verifizierungsfehler: ' . $verifyError]);
    exit;
}

$verifyResult = json_decode($verifyResponse, true);
if (empty($verifyResult['success'])) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Sicherheitsprüfung nicht bestanden.']);
    exit;
}

// --- Formularfelder validieren ---
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$lang = trim($_POST['lang'] ?? 'de');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

if (mb_strlen($subject) > 75) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Betreff zu lang. Maximal 75 Zeichen erlaubt.']);
    exit;
}

if (mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nachricht zu lang. Maximal 5000 Zeichen erlaubt.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

// --- Versuch zählen NACH erfolgreicher Validierung ---
$attempts[] = time();
file_put_contents($rateLimitFile, json_encode($attempts), LOCK_EX);

$to = 'office@verein-agit.at';
$cc = ['k.erik@verein-agit.at', 'm.percin@verein-agit.at'];
$email_subject = 'AGIT Kontaktformular: ' . $subject;

$email_body = "Neue Nachricht vom AGIT Kontaktformular\n\n";
$email_body .= "Name: $name\n";
$email_body .= "E-Mail: $email\n";
if (!empty($phone)) {
    $email_body .= "Telefon: $phone\n";
}
$email_body .= "Betreff: $subject\n\n";
$email_body .= "Nachricht:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Cc: " . implode(', ', $cc) . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$success = mail($to, $email_subject, $email_body, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Ihre Nachricht wurde erfolgreich gesendet!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Fehler beim Senden. Bitte versuchen Sie es später erneut.']);
}
