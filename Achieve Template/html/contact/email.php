<?php
$subject = $_REQUEST['Contacting Sal']; // Subject of your email
$to = 'sa_hle_a1@hotmail.com'; 		 	// Recipient's E-mail
 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "From: " . $_REQUEST['email'] . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
$message .= 'Name: ' . $_REQUEST['name'] . "<br>";
$message .= $_REQUEST['message'];
 
if (@mail($to, $subject, $message, $headers))
{
 // Transfer the value 'sent' to ajax function for showing success message.
 echo 'sent';
}
else
{
 // Transfer the value 'failed' to ajax function for showing error message.
 echo 'failed';
}
?>