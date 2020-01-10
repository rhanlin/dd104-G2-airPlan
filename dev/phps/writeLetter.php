<?php
  $upload_dir = "userUploadImg//";  //檢查資料夾存不存在
  if( ! file_exists($upload_dir )){
    mkdir($upload_dir);
  }

  //處理base64檔案
  $imgData = $_POST['imgUrl'];//接收ajax送來的資料

  $imgData = str_replace('data:image/png;base64,', '', $imgData);//將檔案格式的資訊拿掉
  $data = base64_decode($imgData);

  $imgName =date("Ymd-Gis");
  $userUploadImg = $upload_dir . $imgName . ".jpg";
  $success = file_put_contents( $userUploadImg, $data )
?>

<?php
try {
  //檢查是否還有信紙 
  //...
  //把寫信內容新增進資料庫 
  require_once("connectBook_root.php");
  $sql = "insert into `letter`( memNo, letPower, matPatNo, matPosNo, letTime, letTitle, letContent, imgUrl,mesCount, letSort, letStatus) VALUES ( 10, 1, :matPatNo, :matPosNo, :letTime, :letTitle, :letContent, :imgUrl, 0, :letSort, 0)";

  date_default_timezone_set("Asia/Taipei");  //設定時區
  $letTime=date("Y-n-j G:i:s");  //將時間格式化

  $letInsert = $pdo->prepare($sql);
  $letInsert->bindValue(':matPatNo',$_POST['matPatNo']);
  $letInsert->bindValue(':matPosNo',$_POST['matPosNo']);
  $letInsert->bindValue(':letTime',$letTime);
  $letInsert->bindValue(':letTitle',$_POST['letTitle']);
  $letInsert->bindValue(':letContent',$_POST['letContent']);
  $letInsert->bindValue(':imgUrl',$userUploadImg);
  $letInsert->bindValue(':letSort',$_POST['letSort']);
  $letInsert->execute();

  echo 'success';

  // switch ($_FILES['image']['error']) {
  //   case UPLOAD_ERR_OK:
  //     # 新增一個資料夾
  //     $dir = "userLetUploadImg";
  //     if( file_exists($dir) == false ) mkdir($dir);
  //     # 複製搬移圖片
  //     $from = $_FILES['userUploadImage']['tmp_name'];
  //     $to = "$dir/".$_FILES['userUploadImage']['name'];
  //     if( copy($from,$to) ){
  //       //新增信件內容
  //       require_once("connectBook_root.php");
  //       $sql = "insert into `letter`( memNo, letPower, matPattNo1, matPattNo2, letTime, letTitle, letContent, imgUrl, mesCount, letSort, letStatus, letImgUrl) VALUES ( 10, 1, :matPattNo1, :matPattNo2, '2020-01-07 21:00:00', :letTitle, :letContent, :imgUrl, 0, :letSort, 0, null);";
        
  //       $letInsert = $pdo->prepare($sql);
  //       $letInsert->bindValue(':matPattNo1',$_POST['userPattern']);
  //       $letInsert->bindValue(':matPattNo2',$_POST['userStamp']);
  //       $letInsert->bindValue(':letTitle',$_POST['letterTitle']);
  //       $letInsert->bindValue(':letContent',$_POST['letterContant']);
  //       $letInsert->bindValue(':imgUrl',$_FILES['userUploadImage']['name']);
  //       $letInsert->bindValue(':letSort',$_POST['letSort']);
  //       $letInsert->execute();
  //       echo "完成寫信！";

  //     }else{
  //       echo "上傳失敗!";
  //     }
  //   break;
  
  //   case UPLOAD_ERR_INI_SIZE:
  //     echo "圖片檔案過大";
  //   break;
  
  //   case UPLOAD_ERR_PARTIAL:
  //     echo "圖片異常，請重新再試";
  //   break;
  
  //   case UPLOAD_ERR_NO_FILE:
  //     echo "請上傳圖片";
  //   break;
  
  //   default:
  //     echo "['error']: ", $_FILES['image']['errot'] , "<br>";
  //     break;
  // }

} catch (PDOException $e) {
  echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}
?>