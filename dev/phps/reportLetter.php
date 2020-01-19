<?php
try {
  //檢舉
  require_once("connectBook_root.php");
  $sql = "insert into `letterReport`(memNo, letNo, letRepTime, letRepReason, letRepStatus) VALUES (:memNo, :letNo, :letRepTime, :letRepReason, 0)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $letRepTime = date("Y-n-j H:i:s");  //將時間格式化

  $letRepInsert = $pdo->prepare($sql);
  $letRepInsert->bindValue(':memNo',$_POST['memNo']);
  $letRepInsert->bindValue(':letNo',$_POST['letNo']);
  $letRepInsert->bindValue(':letRepTime',$letRepTime);
  $letRepInsert->bindValue(':letRepReason',$_POST['letRepReason']);
  $letRepInsert->execute();
  echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>