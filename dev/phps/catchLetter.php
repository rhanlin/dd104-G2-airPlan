
<?php
try {
  require_once("connectBook_root.php");
  $sql = "SELECT * FROM `letter` where memNo != :memNo and letStatus != 1 ORDER BY RAND() LIMIT 1";
  $memNo = $_POST['memNo'];
  $randLetter = $pdo->prepare($sql);
  $randLetter->bindValue(':memNo',$memNo);
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

    $writerNo = $letter['memNo'];

    $histySql = "INSERT INTO `history`(memNo,letNo) VALUES (:memNo , :letNo) ";
    $catchHist = $pdo->prepare($histySql);
    $catchHist->bindValue(':memNo',$memNo);
    $catchHist->bindValue(':letNo',$letter['letNo']);
    $catchHist->execute();

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

    $wtrNameSql = "SELECT memName FROM `member` WHERE memNo=$writerNo";
    $writerName = $pdo->prepare($wtrNameSql);
    $writerName->execute();
    if($writerName->rowCount()){
      $writerNameRow = $writerName->fetch(PDO::FETCH_ASSOC);
      $data=[
        'letter'=>$letter,
        'letPattern'=>$catchLetPatRow,
        'writerName'=>$writerNameRow,
      ];
    }

    if($userMsg->rowCount()){
      $userMsgRow = $userMsg->fetchAll(PDO::FETCH_ASSOC);
      $arrLength = count($userMsgRow);
      for($i=0; $i<$arrLength; $i++){
        $msgUserNo = $userMsgRow[$i]['memNo'];
        $msgUserNameSql = "SELECT memName FROM `member` WHERE memNo=$msgUserNo";
        $msgUserName = $pdo->prepare($msgUserNameSql);
        $msgUserName->execute();
        if($msgUserName->rowCount()){
          $msgUserNameRow = $msgUserName->fetch(PDO::FETCH_ASSOC);
          $msgUserNameArr[]=$msgUserNameRow['memName'];
        }
      }

      $data=[
        'letter'=>$letter,
        'letPattern'=>$catchLetPatRow,
        'writerName'=>$writerNameRow,
        'msgUserName'=>$msgUserNameArr,
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
