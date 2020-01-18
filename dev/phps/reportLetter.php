<?php
try {
  //檢舉
  require_once("connectBook_root.php");
  $sql = "insert into `letterReport`(memNo, letNo, letRepTime, letRepContent, letRepStatus) VALUES (:memNo, :letNo, :letRepTime, :letRepContent, 0)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $letRepTime = date("Y-n-j H:i:s");  //將時間格式化

  $letLikInsert = $pdo->prepare($sql);
  $letLikInsert->bindValue(':memNo',$_POST['memNo']);
  $letLikInsert->bindValue(':letNo',$_POST['letNo']);
  $letLikInsert->bindValue(':letRepTime',$letRepTime);
  $letLikInsert->bindValue(':letRepContent',$_POST['letRepContent']);

  $letLikInsert->execute();
} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>