
<?php
try {
  //隨機撈出一筆letter資料
  require_once("connectBook_root.php");
  //撈出隨機信件，且memNo不能等於目前登入的memNo
  // $sql = "SELECT l.letNo, l.memNo, l.letPower, l.matPatNo, l.matPosNo, l.letTime, l.letTitle, l.letContent, l.imgUrl, l.mesCount, l.letSort, l.letStatus, l.letImgUrl, m.msgNo, m.memNo, m.msgTime, m.msgContent, m.msgStatus
  // FROM `letter` l left JOIN `message` m on l.letNo=m.letNo where l.memNo != :memNo ORDER BY RAND() LIMIT 1";

  $sql = "SELECT * FROM `letter` where memNo != :memNo ORDER BY RAND() LIMIT 1";

  $randLetter = $pdo->prepare($sql);
  $randLetter->bindValue(':memNo',$_POST['memNo']);
  // $randLetter->bindValue(':memNo',10); //測試
  $randLetter->execute();
  
  if($randLetter->rowCount()){
    // $letter = $randLetter->fetchObject();
    $letter = $randLetter->fetch(PDO::FETCH_ASSOC);

    //撈出此信件的留言
    $msgSql = "SELECT * FROM `message` where letNo = :letNo";
    $userMsg = $pdo->prepare($msgSql);
    $userMsg->bindValue(':letNo',$letter['letNo']);
    $userMsg->execute();
    if($userMsg->rowCount()){
      $userMsgRow = $userMsg->fetchAll(PDO::FETCH_ASSOC);
    }
    //撈出此信件當初設定的彩繪貼圖
    $patSql = "SELECT matPatUrl FROM `matPattern` WHERE matPatNo = :matPatNo";
    $catchLetPat = $pdo->prepare($patSql);
    $catchLetPat->bindValue(':matPatNo',$letter['matPatNo']);
    $catchLetPat->execute();
    if($catchLetPat->rowCount()){
      $catchLetPatRow = $catchLetPat->fetch(PDO::FETCH_ASSOC);
    }

    //把前端要用的url做好
    $letter = str_replace('userUploadImg//', './phps/userUploadImg/', $letter);
    $letter = str_replace('userLetterCanvas//', './phps/userLetterCanvas/', $letter);
    $data = [
      'letter'=>$letter,
      'msg'=>$userMsgRow,
      'letPattern'=>$catchLetPatRow,
    ];
    echo json_encode($data);

  }else{
    echo json_encode();
  }

  
  
  // echo json_encode(['data'=>$randLetterRow]);


  // if($randLetterRow->rowCount()){
  // }else{
  //   echo json_encode(['data'=>"沒資料~"]);
  // }
  

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>
