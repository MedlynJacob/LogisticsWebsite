<?php
// send_quote.php
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
$cargo = s($data['cargoType'] ?? '');
$origin = s($data['origin'] ?? '');
$destination = s($data['destination'] ?? '');
$commodity = nl2br(s($data['commodity'] ?? ''));
$description = nl2br(s($data['description'] ?? ''));

$subject = "Quote request: $name <$email>";
$body = "<p><strong>Name:</strong> $name</p>" .
  "<p><strong>Email:</strong> $email</p>" .
  "<p><strong>Phone:</strong> $phone</p>" .
  "<p><strong>Cargo Type:</strong> $cargo</p>" .
  "<p><strong>Origin:</strong> $origin</p>" .
  "<p><strong>Destination:</strong> $destination</p>" .
  "<p><strong>Commodity:</strong><br/>$commodity</p>" .
  "<p><strong>Description:</strong><br/>$description</p>";

list($ok, $err) = send_email($DEST_EMAIL, $subject, $body, $email);
if ($ok) echo json_encode(['ok' => true]); else echo json_encode(['ok' => false, 'error' => $err]);
