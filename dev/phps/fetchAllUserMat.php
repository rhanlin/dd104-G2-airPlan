<?php
//把使用者的素材們撈出來:彩繪圖案(matPatNo)、郵戳(matPosNo) 

ob_start();
session_start();
try{
  require_once("connectBook_root.php");
  //取matPattern
  $sqlPattern = "select matPatNo, matPatUrl from `matPattern` where memNo=:memNo";
  $p = $pdo->prepare($sqlPattern);
  $p->bindValue(':memNo',$_SESSION["memNo"]);//抓登入資訊
  // $p->bindValue(':memNo',$_POST['memNo']);
  $p->execute();

  $userPatterns = $p->fetchAll(PDO::FETCH_ASSOC);

  //取matPostmark
  $sqlStamp = "select matPosNo, matPosUrl from `matPostmark` where memNo=:memNo";
  $s = $pdo->prepare($sqlStamp);
  $s->bindValue(':memNo',$_SESSION["memNo"]);//抓登入資訊
  // $s->bindValue(':memNo',$_POST['memNo']);
  $s->execute();

  $userStamps = $s->fetchAll(PDO::FETCH_ASSOC);

  // $info[] = array();

  foreach($userPatterns as $userPattern){
    $info[] = [
      'patternNo'=>$userPattern['matPatNo'],
      'patternUrl'=>$userPattern['matPatUrl'],
    ];
  };
  foreach($userStamps as $userStamp){
    $info[] = [
      'stampNo'=>$userStamp['matPosNo'],
      'stampUrl'=>$userStamp['matPosUrl'],
    ];
  }
  echo json_encode([ 'status'=>'success', 'data'=>$info]);
}catch(PDOException $e){
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>
