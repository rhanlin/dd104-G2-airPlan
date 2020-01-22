<?php
try {
  //檢舉
  require_once("connectBook_root.php");
  $sql = "insert into `messageReport`(memNo, msgNo, msgRepTime, msgRepReason, msgRepStatus) VALUES (:memNo, :msgNo, :msgRepTime, :msgRepReason, 0)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $msgRepTime = date("Y-n-j H:i:s");  //將時間格式化

  $msgRepInsert = $pdo->prepare($sql);
  $msgRepInsert->bindValue(':memNo',$_POST['memNo']);
  $msgRepInsert->bindValue(':msgNo',$_POST['msgNo']);
  $msgRepInsert->bindValue(':msgRepTime',$msgRepTime);
  $msgRepInsert->bindValue(':msgRepReason',$_POST['msgRepReason']);
  $msgRepInsert->execute();
  echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>