<?php
// Configuration for send_contact.php and send_quote.php
//
// This file prefers environment variables (safer) and falls back to
// hardcoded placeholders below. DO NOT commit real credentials to git.
// Recommended: set environment variables on your server or create a
// private `send_mail_config.local.php` (ignored by git) that overrides
// these values.

// 1) Destination email address (who receives form submissions)
$DEST_EMAIL = getenv('DEST_EMAIL') ?: 'medjacob.22@gmail.com';

// 2) SMTP settings. If empty, the helper will fall back to PHP mail().
//    Use a real SMTP provider in production (SendGrid, Mailgun, Gmail SMTP,
//    Zoho, SMTP2GO, etc.). Get host/port/user/pass from the provider.
$SMTP_HOST   = getenv('SMTP_HOST') !== false ? getenv('SMTP_HOST') : '';
$SMTP_PORT   = getenv('SMTP_PORT') !== false ? (int)getenv('SMTP_PORT') : 587;
$SMTP_USER   = getenv('SMTP_USER') !== false ? getenv('SMTP_USER') : '';
$SMTP_PASS   = getenv('SMTP_PASS') !== false ? getenv('SMTP_PASS') : '';
$SMTP_SECURE = getenv('SMTP_SECURE') !== false ? getenv('SMTP_SECURE') : ''; // 'tls' or 'ssl' or ''

// Helpful examples (do NOT store these in the repo):
// Gmail (requires App Password):
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=your-account@gmail.com
// SMTP_PASS=your-app-password
// SMTP_SECURE=tls
//
// SendGrid (SMTP):
// SMTP_HOST=smtp.sendgrid.net
// SMTP_PORT=587
// SMTP_USER=apikey
// SMTP_PASS=YOUR_SENDGRID_API_KEY

// Local development/testing: use MailHog or Mailtrap. Example Mailtrap:
// SMTP_HOST=smtp.mailtrap.io
// SMTP_PORT=2525
// SMTP_USER=your-mailtrap-user
// SMTP_PASS=your-mailtrap-pass

// SECURITY NOTE:
// - If you host on GitHub Pages you cannot run PHP there. Move these
//   PHP files to a real PHP host (shared hosting, VPS, or serverless PHP).
// - Do NOT commit secrets to the repo. Use environment variables or
//   a `send_mail_config.local.php` file that is added to `.gitignore`.
