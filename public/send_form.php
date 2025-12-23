<?php
// send_form.php
// Accepts JSON POST with a `type` field ('contact' or 'quote')
// and sends an email using the PHP mail() function.
// NOTE: This file must be served by a PHP-enabled webserver (Apache, Nginx+PHP-FPM, etc.).

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // CORS preflight
  http_response_code(200);
  exit;
}

header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
  echo json_encode(['ok' => false, 'error' => 'invalid_json']);
  exit;
}

$type = isset($data['type']) ? $data['type'] : 'contact';

// Destination email — set this to your address when deploying.
$DEST_EMAIL = 'owner@example.com';
// You can override by creating `public/send_form_config.php` with `$DEST_EMAIL = 'you@domain.com';`
if (file_exists(__DIR__ . '/send_form_config.php')) {
  include __DIR__ . '/send_form_config.php';
}

function safe($v) {
  return htmlspecialchars(trim((string)$v));
}

if ($type === 'quote') {
  $name = safe($data['name'] ?? '');
  $email = safe($data['email'] ?? '');
  $phone = safe($data['fullPhone'] ?? ($data['phone'] ?? ''));
  $cargo = safe($data['cargoType'] ?? '');
  $origin = safe($data['origin'] ?? '');
  $destination = safe($data['destination'] ?? '');
  $commodity = nl2br(safe($data['commodity'] ?? ''));
  $description = nl2br(safe($data['description'] ?? ''));

  $subject = "Quote request: $name <$email>";
  $body = "<p><strong>Name:</strong> $name</p>" .
    "<p><strong>Email:</strong> $email</p>" .
    "<p><strong>Phone:</strong> $phone</p>" .
    "<p><strong>Cargo Type:</strong> $cargo</p>" .
    "<p><strong>Origin:</strong> $origin</p>" .
    "<p><strong>Destination:</strong> $destination</p>" .
    "<p><strong>Commodity:</strong><br/>$commodity</p>" .
    "<p><strong>Description:</strong><br/>$description</p>";
} else {
  $name = safe($data['name'] ?? '');
  $email = safe($data['email'] ?? '');
  $phone = safe($data['fullPhone'] ?? ($data['phone'] ?? ''));
  $country = safe($data['country'] ?? '');
  $message = nl2br(safe($data['message'] ?? ''));

  $subject = "Contact form: $name <$email>";
  $body = "<p><strong>Name:</strong> $name</p>" .
    "<p><strong>Email:</strong> $email</p>" .
    "<p><strong>Phone:</strong> $phone</p>" .
    "<p><strong>Country:</strong> $country</p>" .
    "<p><strong>Message:</strong><br/>$message</p>";
}

$from = $email ?: 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost');
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . ($email ?: $from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Prefer PHPMailer + SMTP if available for reliable delivery.
$sent = false;
$errorMsg = null;

// Try to load Composer autoloader from common locations
$autoloadPaths = [__DIR__ . '/vendor/autoload.php', __DIR__ . '/../vendor/autoload.php'];
$loaderFound = false;
foreach ($autoloadPaths as $p) {
  if (file_exists($p)) {
    require_once $p;
    $loaderFound = true;
    break;
  }
}

if ($loaderFound && class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
  try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    // Use SMTP if SMTP settings are provided in config
    if (!empty($SMTP_HOST)) {
      $mail->isSMTP();
      $mail->Host = $SMTP_HOST;
      $mail->SMTPAuth = true;
      $mail->Username = $SMTP_USER;
      $mail->Password = $SMTP_PASS;
      $mail->SMTPSecure = !empty($SMTP_SECURE) ? $SMTP_SECURE : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = !empty($SMTP_PORT) ? (int)$SMTP_PORT : 587;
    }

    $fromEmail = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : ('no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
    $mail->setFrom($fromEmail);
    $mail->addAddress($DEST_EMAIL);
    $mail->addReplyTo($email ?: $fromEmail);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;

    $mail->send();
    $sent = true;
  } catch (Exception $e) {
    $errorMsg = $e->getMessage();
    $sent = false;
  }
}

// Fallback to PHP mail() if PHPMailer not available or sending failed
if (!$sent) {
  $ok = @mail($DEST_EMAIL, $subject, $body, $headers);
  if ($ok) {
    $sent = true;
  } else {
    $sent = false;
    if ($errorMsg === null) $errorMsg = 'mail_failed';
  }
}

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  echo json_encode(['ok' => false, 'error' => $errorMsg]);
}
