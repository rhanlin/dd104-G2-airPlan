<?php
try {
  /*ALTER TABLE `letter`
  ADD CONSTRAINT letter_ibfk_1 FOREIGN KEY (`memNo`) REFERENCES `member` (`memNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT letter_ibfk_2 FOREIGN KEY (`matPattNo1`) REFERENCES `member` (`matNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT letter_ibfk_3 FOREIGN KEY (`matPattNo2`) REFERENCES `member` (`matNo`) ON DELETE CASCADE ON UPDATE CASCADE;
  COMMIT;
*/

  //檢查是否還有信紙 
  //...
  require_once("connectBook_root.php");
  $sql = "insert into `letter`( memNo, letPower, matPattNo1, matPattNo2, letTime, letTitle, letContent, imgUrl, mesCount, letSort, letStatus, letImgUrl) VALUES ( 3, 1, :matPattNo1, :matPattNo2, '2020-01-07 21:00:00', :letTitle, :letContent, :imgUrl, 0, :letSort, 0, null);";


  $letInsert = $pdo->prepare($sql);
  $letInsert->bindValue(':matPattNo1',$_POST['userPattern']);
  $letInsert->bindValue(':matPattNo2',$_POST['userStamp']);
  $letInsert->bindValue(':letTitle',$_POST['letterTitle']);
  $letInsert->bindValue(':letContent',$_POST['letterContant']);
  $letInsert->bindValue(':imgUrl',$_FILES['userUploadImage']['name']);
  $letInsert->bindValue(':letSort',$_POST['letSort']);
  $letInsert->execute();

  $affected_rows = $letInsert->rowCount();
  echo $affected_rows;

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