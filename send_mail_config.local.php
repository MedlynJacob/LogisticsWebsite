<?php
// Local send mail config (NOT committed). Copy this file to override
// settings from send_mail_config.php on your development or private server.
// Add this path to .gitignore to keep credentials out of version control.

// Destination email address for form submissions
$DEST_EMAIL = 'medjacob.22@gmail.com';

// SMTP settings (leave blank to use PHP's mail() fallback)
// Fill these only if you have SMTP credentials. Leaving them empty
// will attempt to send using the server's `mail()` function.
$SMTP_HOST   = '';
$SMTP_PORT   = 587;
$SMTP_USER   = '';
$SMTP_PASS   = '';
$SMTP_SECURE = ''; // 'tls' or 'ssl' or ''

// Quick notes:
// - For Gmail use smtp.gmail.com, port 587, and an App Password for SMTP_PASS.
// - For SendGrid set SMTP_USER to 'apikey' and SMTP_PASS to your API key.
// - Never commit this file. Keep it private on your server.
