<?php
// Shared helper: send email using PHPMailer (if available) with mail() fallback.

// Attempts to send and returns [ok(bool), error(string|null)]
function send_email($to, $subject, $htmlBody, $replyTo = null) {
  $sent = false;
  $errorMsg = null;

  // Try to load Composer autoloader
  $autoloadPaths = [__DIR__ . '/vendor/autoload.php', __DIR__ . '/../vendor/autoload.php', __DIR__ . '/../../vendor/autoload.php'];
  $loaderFound = false;
  foreach ($autoloadPaths as $p) {
    if (file_exists($p)) {
      require_once $p;
      $loaderFound = true;
      break;
    }
  }

  // Load config if exists
  if (file_exists(__DIR__ . '/send_mail_config.php')) {
    include __DIR__ . '/send_mail_config.php';
  }

  if ($loaderFound && class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
    try {
      $mail = new PHPMailer\PHPMailer\PHPMailer(true);
      if (!empty($SMTP_HOST)) {
        $mail->isSMTP();
        $mail->Host = $SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = $SMTP_USER;
        $mail->Password = $SMTP_PASS;
        if (!empty($SMTP_SECURE)) $mail->SMTPSecure = $SMTP_SECURE;
        if (!empty($SMTP_PORT)) $mail->Port = (int)$SMTP_PORT;
      }

      $from = (!empty($replyTo) && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) ? $replyTo : ('no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'));
      $mail->setFrom($from);
      $mail->addAddress($to);
      if (!empty($replyTo)) $mail->addReplyTo($replyTo);
      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body = $htmlBody;

      $mail->send();
      $sent = true;
    } catch (Exception $e) {
      $errorMsg = $e->getMessage();
      $sent = false;
    }
  }

  if (!$sent) {
    $headers = "From: " . (filter_var($replyTo, FILTER_VALIDATE_EMAIL) ? $replyTo : ('no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'))) . "\r\n";
    $headers .= "Reply-To: " . ($replyTo ?: '') . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $ok = @mail($to, $subject, $htmlBody, $headers);
    if ($ok) {
      $sent = true;
    } else {
      if ($errorMsg === null) $errorMsg = 'mail_failed';
      $sent = false;
    }
  }

  return [$sent, $errorMsg];
}
