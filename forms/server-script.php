<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Replace with the actual recipient email address
    $recipientEmail = 'avmansoor2023@gmail.com';

    // Set up the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Compose the email message
    $mailMessage = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

    // Send the email
    if (mail($recipientEmail, $subject, $mailMessage, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    // Handle invalid requests
    echo 'Invalid request';
}
?>
