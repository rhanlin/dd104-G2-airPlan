<?php
try {
  //打賞
  require_once("connectBook_root.php");
  $sql = "insert into `letterLike`(memNo, letNo, letLikeTime) VALUES (:memNo, :letNo, :letLikeTime)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $letLikeTime = date("Y-n-j H:i:s");  //將時間格式化

  $letLikInsert = $pdo->prepare($sql);
  $letLikInsert->bindValue(':memNo',$_POST['memNo']);
  $letLikInsert->bindValue(':letNo',$_POST['letNo']);
  $letLikInsert->bindValue(':letLikeTime',$letLikeTime);
  $letLikInsert->execute();
  $letLikeNo = $pdo->lastInsertId();//立即取得insert後的letLikeNo

  //撈出要增加airCoin的memNo
  $writerSql = "SELECT l.memNo FROM `letter` l JOIN `letterLike` k ON k.letNo=l.letNo WHERE k.letLikeNo=:letLikeNo";
  $writerNo = $pdo->prepare($writerSql);
  $writerNo->bindValue(':letLikeNo',$letLikeNo);
  $writerNo->execute();
  $writerNoRow = $writerNo->fetch(PDO::FETCH_ASSOC);
    $addMoneySql = "UPDATE `member` SET airCoin=airCoin+100 WHERE memNo=:memNo";
    $addMoney = $pdo->prepare($addMoneySql);
    $addMoney->bindValue(':memNo',$writerNoRow['memNo']);
    $addMoney->execute();
  

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}

?>