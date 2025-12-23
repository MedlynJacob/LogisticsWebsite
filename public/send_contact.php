<?php
// send_contact.php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) { echo json_encode(['ok' => false, 'error' => 'invalid_json']); exit; }

include __DIR__ . '/send_mail_config.php';
include __DIR__ . '/_send_helpers.php';

function s($v) { return htmlspecialchars(trim((string)($v ?? ''))); }

$name = s($data['name'] ?? '');
$email = s($data['email'] ?? '');
$phone = s($data['fullPhone'] ?? ($data['phone'] ?? ''));
$country = s($data['country'] ?? '');
$message = nl2br(s($data['message'] ?? ''));

$subject = "Contact form: $name <$email>";
$body = "<p><strong>Name:</strong> $name</p>" .
  "<p><strong>Email:</strong> $email</p>" .
  "<p><strong>Phone:</strong> $phone</p>" .
  "<p><strong>Country:</strong> $country</p>" .
  "<p><strong>Message:</strong><br/>$message</p>";

list($ok, $err) = send_email($DEST_EMAIL, $subject, $body, $email);
if ($ok) echo json_encode(['ok' => true]); else echo json_encode(['ok' => false, 'error' => $err]);
