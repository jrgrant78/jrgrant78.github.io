<?php

$EmailTo = "jrgrant78@yahoo.com.com";
$Subject = "Form sent via jrgrantfilms.com";

$firstnameErr = $lasttnameErr = $TelErr = $EmailErr = $MarketErr = $DescriptionErr = "";
$firstname    = $lastname     = $Tel    = $Email    = $Market    = $Description    = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["firstname"])) {
    $firstnameErr = "Required Field";
  } else {
    $firstname = test_input($_POST["firstname"]);
  }

  if (empty($_POST["lastname"])) {
    $lastnameErr = "Required Field";
  } else {
    $lastname = test_input($_POST["lastname"]);
  }

  if (empty($_POST["Tel"])) {
    $TelErr = "Required Field";
  } else {
    $Tel = test_input($_POST["Tel"]);
  }

  if (empty($_POST["Email"])) {
    $EmailErr = "Required Field";
  } else {
    $Email = test_input($_POST["Email"]);
  }

  if (empty($_POST["Market"])) {
    $MarketErr = "Required Field";
  } else {
    $Market = test_input($_POST["Market"]);
  }

  if (empty($_POST["Description"])) {
    $DescriptionErr = "Required Field";
  } else {
    $Description = test_input($_POST["Description"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// prepare email body text
$Body = "Form sent via mylifetold.com";
$Body .= "";
$Body .= "\n";
$Body .= "\n";
$Body .= "First Name: ";
$Body .= $firstname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $lastname;
$Body .= "\n";
$Body .= "Telephone: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "\n";
$Body .= "Is your video for film, business, or family? ";
$Body .= $Market;
$Body .= "\n";
$Body .= "\n";
$Body .= "Please describe, with as much detail as possible, what the goals are of your project and why you are requesting my services. ";
$Body .= $Description;
$Body .= "\n";
$Body .= "\n";

$fields = array('firstname', 'lastname', 'Tel', 'Email', 'Market', 'Description');

$error = false; //No errors yet
foreach($fields AS $fieldname) { //Loop trough each field
  if(!isset($_POST[$fieldname]) || empty($_POST[$fieldname])) {
    $error = true; //Yup there are errors
  }
}

if($error == true) { //Only create queries when no error occurs
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.php\">";
  window.open('error.php    nid=4510&user=$name&pass=$pass&hideparams=1', 'width=710,height=555,left=160,top=170');
}

else if ($error == false){
  $success = mail($EmailTo, $Subject, $Body, "From: <$Email>"); // send email
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=submitthanks.php\">"; // redirect to success page 
  window.open('submitthanks.php    nid=4510&user=$name&pass=$pass&hideparams=1', 'width=710,height=555,left=160,top=170');
}
?>