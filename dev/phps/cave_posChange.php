<?php
try {
    require_once("connectBook_root.php");
    $sql = "update `matpostmark` set mugStatus=:mugStatus where memNo=:memNo and matPosNo=:matPosNo;update `matpostmark` set mugStatus=:mugStatusOld where memNo=:memNo and matPosNo=:matPosNoOld;";
    $postmark = $pdo->prepare($sql);
    $postmark->bindValue(':memNo', $_POST["memNo"]);
    $postmark->bindValue(':matPosNo', $_POST["matPosNo"]);
    $postmark->bindValue(':mugStatus', 1);
    $postmark->bindValue(':matPosNoOld', $_POST["matPosNoOld"]);
    $postmark->bindValue(':mugStatusOld', 0);
    $postmark->execute();
    session_start();//更改成功,將新intColor資料寫入session
    

    if($postmark->rowCount() == 0) { //找不到
        echo "{}";
    }else { //找得到
        $postmarkRow= $postmark->fetch(PDO::FETCH_ASSOC);
        $_SESSION["matPosNo"] = $postmarkRow["matPosNo"]; 
        echo json_encode($postmarkRow);//送出json字串

    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>