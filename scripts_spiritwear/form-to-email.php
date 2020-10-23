<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['Name'];
$preference = $_POST['Preference'];
$Teacher = $_POST['Teacher'];
$visitor_email = $_POST['Email'];
$phone = $_POST['Phone'];
$preference = $_POST['Preference'];
$message = $_POST['Order'];

$email_from = "$visitor_email";//<== update the email address
$email_subject = "New Spiritwear Order";
$email_body = "Spiritwear Order For $name:\n $message".

$to = "jrgrant@jrgrantfilms.com, $visitor_email";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: https://donorbox.org/embed/2020-spiritwear');

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>