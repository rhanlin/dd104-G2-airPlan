<?php
  $upload_dir = "userUploadImg//";  
  $upload_canvas = "userLetterCanvas//";
  //檢查資料夾存不存在
  if( ! file_exists($upload_dir )){
    mkdir($upload_dir);
  }
  if(! file_exists($upload_canvas )){
    mkdir($upload_canvas);
  }

  //處理base64檔案
  $imgData = $_POST['imgUrl'];//接收使用者上傳的圖片
  $letImgUrl = $_POST['hidden_data'];//接收使用者的信件canvas截圖
  
  $imgData = str_replace('data:image/png;base64,', '', $imgData);//將檔案格式的資訊拿掉:png
  $imgData = str_replace('data:image/jpeg;base64,', '', $imgData);//將檔案格式的資訊拿掉:jpeg
  $imgData = str_replace('data:image/gif;base64,', '', $imgData);//將檔案格式的資訊拿掉:gif

  $letImgUrl = str_replace('data:image/png;base64,', '', $letImgUrl);//將檔案格式的資訊拿掉

  // echo $imgData;
  // exit();
  $data = base64_decode($imgData);
  $letImgUrl_Data = base64_decode($letImgUrl);

  $imgName =date("Ymd_Gis");
  $userUploadImg = $upload_dir . $imgName . ".jpg";
  $userLetterCanvas = $upload_canvas . "letImg_" .$imgName . ".png";

  $success = file_put_contents( $userUploadImg, $data );
  $letSuccess = file_put_contents( $userLetterCanvas, $letImgUrl_Data );

?>

<?php
try {
  //檢查是否還有信紙 
  //...
  //把寫信內容新增進資料庫 
  require_once("connectBook_root.php");
  $sql = "insert into `letter`( memNo, letPower, matPatNo, matPosNo, letTime, letTitle, letContent, imgUrl,mesCount, letSort, letStatus, letImgUrl) VALUES ( :memNo, 1, :matPatNo, :matPosNo, :letTime, :letTitle, :letContent, :imgUrl, 0, :letSort, 0, :letImgUrl)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $letTime=date("Y-n-j H:i:s");  //將時間格式化

  $letInsert = $pdo->prepare($sql);
  $letInsert->bindValue(':memNo',$_POST['memNo']);
  $letInsert->bindValue(':matPatNo',$_POST['matPatNo']);
  $letInsert->bindValue(':matPosNo',$_POST['matPosNo']);
  $letInsert->bindValue(':letTime',$letTime);
  $letInsert->bindValue(':letTitle',$_POST['letTitle']);
  $letInsert->bindValue(':letContent',$_POST['letContent']);
  $letInsert->bindValue(':imgUrl',$userUploadImg);
  $letInsert->bindValue(':letSort',$_POST['letSort']);
  $letInsert->bindValue(':letImgUrl',$userLetterCanvas);
  $letInsert->execute();
  
  //select l.letImgUrl, m.matPatUrl from `letter` l JOIN `matPattern` m on l.matPatNo=m.matPatNo where letNo=27;
  $letNo = $pdo->lastInsertId();
  $imgSql = "select l.letImgUrl, m.matPatUrl from `letter` l JOIN `matPattern` m on l.matPatNo=m.matPatNo where letNo= $letNo";
  $letImg = $pdo->query($imgSql);
  $letImgRow = $letImg->fetch(PDO::FETCH_ASSOC);
  $letImgRow = str_replace('userLetterCanvas//', './phps/userLetterCanvas/', $letImgRow);//把前端要用的url做好

  $memNo = $_POST['memNo'];
  $loseLetter = "UPDATE `member` SET letCount=letCount-1 WHERE memNo=$memNo";
  $reduceLet = $pdo->prepare($loseLetter);
  $reduceLet->execute();

  $getletterCount = "SELECT letCount FROM `member` WHERE memNo=$memNo";
  //拿出扣掉後的信紙數量然後回前端在摺紙階段show出來
  $getLetCount = $pdo->query($getletterCount);
  $letCountRow = $getLetCount->fetch(PDO::FETCH_ASSOC);
  
  $data=[
    'data'=>$letImgRow,
    'letCount'=>$letCountRow["letCount"],
  ];

  session_start();
  $_SESSION["letCount"] = $letCountRow["letCount"]; 
  echo json_encode($data);

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>