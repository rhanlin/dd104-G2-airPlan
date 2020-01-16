<?php
try {
  //將user的留言寫進資料庫
  require_once("connectBook_root.php");
  $sql = "insert into `message`( memNo, letNo, msgTime, msgContent) VALUES ( :memNo, :letNo, :msgTime, :msgContent)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $msgTime=date("Y-n-j H:i:s");  //將時間格式化

  $msgInfo = $pdo->prepare($sql);
  $msgInfo->bindValue(':memNo',$_POST['memNo']);
  $msgInfo->bindValue(':letNo',$_POST['letNo']);
  $msgInfo->bindValue(':msgTime',$msgTime);
  $msgInfo->bindValue(':msgContent',$_POST['msgContent']);
  $msgInfo->execute();

  // $msgInfoRow = $msgInfo->fetch(PDO::FETCH_ASSOC);
  // echo json_encode(['data'=>$msgInfoRow]);

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>