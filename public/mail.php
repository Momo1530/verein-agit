<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
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

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

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
