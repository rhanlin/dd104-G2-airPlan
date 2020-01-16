
<?php
try {
  require_once("connectBook_root.php");
  $sql = "SELECT * FROM `letter` where memNo != :memNo ORDER BY RAND() LIMIT 1";

  $randLetter = $pdo->prepare($sql);
  $randLetter->bindValue(':memNo',$_POST['memNo']);
  $randLetter->execute();
  
  if($randLetter->rowCount()){
    $letter = $randLetter->fetch(PDO::FETCH_ASSOC);
    $letter = str_replace('userUploadImg//', './phps/userUploadImg/', $letter);
    $letter = str_replace('userLetterCanvas//', './phps/userLetterCanvas/', $letter);
    $data=['letter'=>$letter];
    $msgSql = "SELECT * FROM `message` where letNo = :letNo";
    $userMsg = $pdo->prepare($msgSql);
    $userMsg->bindValue(':letNo',$letter['letNo']);
    $userMsg->execute();

    $patSql = "SELECT matPatUrl FROM `matPattern` WHERE matPatNo = :matPatNo";
    $catchLetPat = $pdo->prepare($patSql);
    $catchLetPat->bindValue(':matPatNo',$letter['matPatNo']);
    $catchLetPat->execute();
    if($catchLetPat->rowCount()){
      $catchLetPatRow = $catchLetPat->fetch(PDO::FETCH_ASSOC);
      $data=[
        'letter'=>$letter,
        'letPattern'=>$catchLetPatRow,
      ];
    }
    if($userMsg->rowCount()){
      $userMsgRow = $userMsg->fetchAll(PDO::FETCH_ASSOC);
      $data=[
        'letter'=>$letter,
        'letPattern'=>$catchLetPatRow,
        'msg'=>$userMsgRow,
      ];
    }
    echo json_encode($data);
  }else{
    echo json_encode();
  }

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>
