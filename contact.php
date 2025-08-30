<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!$input || !isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

$name = trim($input['name']);
$email = trim($input['email']);
$message = trim($input['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit;
}

// Validate message length
if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message must be at least 10 characters long']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'felixelias5@gmail.com';
$subject = 'New Contact Form Submission from ' . $name;

// Create email body
$email_body = "New Contact Form Submission\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n\n";
$email_body .= "Message:\n" . $message . "\n\n";
$email_body .= "Sent at: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email
if (@mail($to, $subject, $email_body, $headers)) {
    echo json_encode([
        'success' => true, 
        'message' => 'Message sent successfully! Thank you for reaching out.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send message. Please try again later.'
    ]);
}
?>