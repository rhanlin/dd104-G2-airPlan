<?php
try {
    require_once("connectBook_root.php");
    $sqlsetPassword = "update `member` set memPsw=:memPsw where memNo=:memNo;";
    $membersetPsw = $pdo->prepare($sqlsetPassword);
    $membersetPsw->bindValue(':memPsw', $_POST["memPsw"]);
    $membersetPsw->bindValue(':memNo', $_POST["memNo"]);
    $membersetPsw->execute();
	
	$sqlPswCheck = "select * from `member` where memNo=:memNo and memPsw=:memPsw";
    $pswCheck = $pdo->prepare($sqlPswCheck);
    $pswCheck->bindValue(':memPsw', $_POST["memPsw"]);
    $pswCheck->bindValue(':memNo', $_POST["memNo"]);
    $pswCheck->execute();
    if ($pswCheck->rowCount() == 0) { //找不到
        echo "{}";
    }else { //找得到
        $pswRowCheck= $pswCheck->fetch(PDO::FETCH_ASSOC);
        echo json_encode($pswRowCheck);//送出json字串
        session_start();//更改成功,將新intColor資料寫入session
        $_SESSION["memPsw"] = $pswRowCheck["memPsw"]; 
    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>