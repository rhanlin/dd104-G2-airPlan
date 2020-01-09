<?php
//把使用者的素材們撈出來:彩繪圖案(matPatNo)、郵戳(matPosNo) 
  class User {
    // public $id;
    public $stampNo; //郵戳編號
    public $stampUrl; //郵戳路徑
    public $patternNo; //彩繪圖案編號
    public $patternUrl; //彩繪圖案路徑
  }

try{
  require_once("connectBook_root.php");
  $sqlPattern = "select matPatNo, matPatUrl from `matPattern` where memNo = 10";
  $userPatterns = $pdo->query($sqlPattern); 
  $userPatterns = $products->fetchAll(PDO::FETCH_ASSOC);

  if($userPatterns){
    //成功;
    while ($row = mysqli_fetch_array($userPatterns,MYSQL_ASSOC)) {
      $userP = new User();
      $userP->patternNo = $row["matPatNo"];
      $userP->patternUrl = $row["matPatUrl"];
      $data[]=$userP;
    }
    $json = json_encode($data);//把資料轉換為JSON資料.
    echo "{".'"user"'.":".$json."}";
    }else{
    echo "失敗";
    }
}catch(PDOException $e){
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>


<?php
try {
  require_once("connectBook_root.php");
  $sqlStamp = "select matPosNo, matPosUrl from `matPostmark` where memNo = 10";
  $userStamps = $pdo->query($sqlStamp); 
  $userStamps = $products->fetchAll(PDO::FETCH_ASSOC);
  if($userStamps){
    //成功;
    while ($row = mysqli_fetch_array($userPatterns,MYSQL_ASSOC)) {
      $userS = new User();
      $userS->stampNo = $row["matPosNo"];
      $userS->stampUrl = $row["matPosUrl"];
      $data[]=$userS;
    }
    $json = json_encode($data);//把資料轉換為JSON資料.
    echo "{".'"user"'.":".$json."}";
    }else{
    echo "失敗";
    }
} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>