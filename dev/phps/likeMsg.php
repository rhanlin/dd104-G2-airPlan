<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `messagelike`(memNo,msgNo,msgLikeTime)values(:memNo,:msgNo,:msgLikeTime)";
    date_default_timezone_set("Asia/Taipei");  //設定時區
    $msgRepTime = date("Y-n-j H:i:s");  //將時間格式化
    $liked = $pdo->prepare($sql);
    $liked->bindValue(":memNo", $_GET["memNo"]);
    $liked->bindValue(":msgNo", $_GET["msgNo"]);
    $liked->bindValue(":msgLikeTime", $msgRepTime);
    $liked->execute();
    $msglikeNo = $pdo->lastInsertId();//立即取得insert後的msglikeNo
    //撈出要增加airCoin的memNo
    $writerSql = "SELECT m.memNo FROM `message` m JOIN `messageLike` k ON k.msgNo=m.msgNo WHERE k.msglikeNo=:msglikeNo";
    $writerNo = $pdo->prepare($writerSql);
    $writerNo->bindValue(':msglikeNo',$msglikeNo);
    $writerNo->execute();
    $writerNoRow = $writerNo->fetch(PDO::FETCH_ASSOC);
    $addMoneySql = "UPDATE `member` SET airCoin=airCoin+100 WHERE memNo=:memNo";
    $addMoney = $pdo->prepare($addMoneySql);
    $addMoney->bindValue(':memNo',$writerNoRow['memNo']);
    $addMoney->execute();

    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>