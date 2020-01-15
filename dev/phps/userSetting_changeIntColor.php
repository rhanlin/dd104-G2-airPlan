<?php
try {
    require_once("connectBook_root.php");
    $sqlColor = "update `member` set intColor=:intColor where memNo=:memNo;";
    $memberColor = $pdo->prepare($sqlColor);
    $memberColor->bindValue(':intColor', $_POST["intColor"]);
    $memberColor->bindValue(':memNo', $_POST["memNo"]);
    $memberColor->execute();
        
    $sqlColorCheck = "select * from `member` where memNo=:memNo and intColor=:intColor";
    $ColorCheck = $pdo->prepare($sqlColorCheck);
    $ColorCheck->bindValue(':intColor', $_POST["intColor"]);
    $ColorCheck->bindValue(':memNo', $_POST["memNo"]);
    $ColorCheck->execute();
    if($ColorCheck->rowCount() == 0) { //找不到
        echo "{}";
    }else { //找得到
        $ColorRowCheck= $ColorCheck->fetch(PDO::FETCH_ASSOC);
        echo json_encode($ColorRowCheck);//送出json字串
        session_start();//更改成功,將新intColor資料寫入session
        $_SESSION["intColor"] = $ColorRowCheck["intColor"]; 
    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>