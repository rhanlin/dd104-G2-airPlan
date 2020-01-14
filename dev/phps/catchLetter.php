
<?php
try {
  //隨機撈出一筆letter資料
  require_once("connectBook_root.php");
  $sql = "SELECT * FROM `letter` ORDER BY RAND() LIMIT 1";

  $randLetter = $pdo->query($sql);
  $randLetterRow = $randLetter->fetch(PDO::FETCH_ASSOC);
  
  $randLetterRow = str_replace('userUploadImg//', './phps/userUploadImg/', $randLetterRow);//把前端要用的url做好
  echo json_encode(['data'=>$randLetterRow]);

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>