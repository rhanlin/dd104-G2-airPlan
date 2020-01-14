<?php
require("class.phpmailer.php");

//Send mail using gmail
$mail = new PHPMailer(true);
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "dd104g23@gmail.com"; // =====GMAIL username 寄件者
    $mail->Password = "DD104-g23"; // =====GMAIL password 寄件者密碼

//Typical mail data
$mail->AddAddress("a0926036356@gmail.com");//========收件者
$mail->SetFrom("dd104g23@gmail.com");//========回覆
$mail->Subject = "AirPlan 新密碼通知～";//========
$mail->Body = "親愛的好機友 您的新密碼為：";//========

try{
    $mail->Send();
    echo "Success!";
} catch(Exception $e){
    //Something went bad
    echo "Fail - " . $mail->ErrorInfo;
}
?>