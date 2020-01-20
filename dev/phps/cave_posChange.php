<?php
try {
    require_once("connectBook_root.php");
    //將所有郵戳預設值設為0
    $sqlOld = "update `matpostmark` set mugStatus=:mugStatusOld where memNo=:memNo;";
    $postmarkOld = $pdo->prepare($sqlOld);
    $postmarkOld->bindValue(':memNo', $_POST["memNo"]);
    $postmarkOld->bindValue(':mugStatusOld', 0);
    $postmarkOld->execute();
    //將被點選更換的郵戳預設值設為1
    $sqlNew = "update `matpostmark` set mugStatus=:mugStatus where memNo=:memNo and matPosNo=:matPosNo;";
    $postmarkNew = $pdo->prepare($sqlNew);
    $postmarkNew->bindValue(':memNo', $_POST["memNo"]);
    $postmarkNew->bindValue(':matPosNo', $_POST["matPosNo"]);
    $postmarkNew->bindValue(':mugStatus', 1);
    $postmarkNew->execute();
    //查詢預設值為1的郵戳
    $sqlCheck = "select * from `matpostmark` where memNo=:memNo and mugStatus=:mugStatus;";
    $postmarkCheck = $pdo->prepare($sqlCheck);
    $postmarkCheck->bindValue(':memNo', $_POST["memNo"]);
    $postmarkCheck->bindValue(':mugStatus', 1);
    $postmarkCheck->execute();
    if($postmarkCheck->rowCount() == 0) { //找不到
        echo "{}";
    }else { //找得到
        $posCheckRow= $postmarkCheck->fetch(PDO::FETCH_ASSOC);
        echo json_encode($posCheckRow);
        session_start();//更改成功,將預設為1的郵戳編號及路徑料寫入session
        $_SESSION["matPosNo"] = $posCheckRow["matPosNo"]; 
        $_SESSION["matPosUrl"] = $posCheckRow["matPosUrl"];
    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}

?>