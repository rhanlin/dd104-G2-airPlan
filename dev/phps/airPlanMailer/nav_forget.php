<?php
try {
    require_once("../connectBook_root.php");
    $sqlSearch = "select * from `member` where memEmail=:memEmail";
    $memberSearch = $pdo->prepare($sqlSearch);
    $memberSearch->bindValue(':memEmail', $_POST["memEmail"]);
    $memberSearch->execute();
    if($memberSearch->rowCount() == 0 ){//找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
        $sqlUpdate = "update `member` set memPsw=:memNewPsw where memEmail=:memEmail;";
        $memberUpdate = $pdo->prepare($sqlUpdate);
        $memberUpdate->bindValue(':memEmail', $_POST["memEmail"]);
        $memberUpdate->bindValue(':memNewPsw', $_POST["newPsw"]);
        $memberUpdate->execute();
        
        $sqlCheck = "select * from `member` where memEmail=:memEmail and memPsw=:memNewPsw";
        $memberCheck = $pdo->prepare($sqlCheck);
        $memberCheck->bindValue(':memEmail', $_POST["memEmail"]);
        $memberCheck->bindValue(':memNewPsw', $_POST["newPsw"]);
        $memberCheck->execute();
        $memRowCheck= $memberCheck->fetch(PDO::FETCH_ASSOC);
        

        //gmail寄送密碼
        $userEmailF = $_POST["memEmail"];
        $userPasswordF = $_POST["newPsw"];
        require("class.phpmailer.php");
        //Send mail using gmail
        $mail = new PHPMailer(true);
        $mail->SMTPAuth = true; // enable SMTP authentication
        $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
        $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
        $mail->Port = 465; // set the SMTP port for the GMAIL server
        $mail->Username = "dd104g23@gmail.com"; // =====GMAIL username 寄件者
        $mail->Password = "DD104-g23"; // =====GMAIL password 寄件者密碼
        $mail->IsSMTP(); // telling the class to use SMTP
        //Typical mail data
        $mail->AddAddress($userEmailF);//========收件者
        $mail->SetFrom("dd104g23@gmail.com");//========回覆
        $mail->Subject = "AirPlan 新密碼通知～";//========
        $mail->Body = "機友 您的新密碼為：".$userPasswordF;//========
        try{
            $mail->Send();
            echo "Success!";
        }catch(Exception $e){
            //Something went bad
            echo "Fail - " . $mail->ErrorInfo;
        }
        //echo json_encode($memRowCheck);//送出json字串
    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>