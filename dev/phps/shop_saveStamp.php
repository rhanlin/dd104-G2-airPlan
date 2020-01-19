<?php

//=============把商城購買素材完後更新的會員的已持有素材  依照material/postmark/figure 三種matLSort分類寫回資料庫========================
require_once "connectBook_root.php";
try {
    $pdo->beginTransaction();

    $sql = "insert into `matpostmark`(matPosNo,memNo,matPosName,matPosUrl,mugStatus,matPosLSort,matPosSSort) values(null,:memNo,:matPosName,'',:mugStatus,:matPosLSort,null)";
    $products = $pdo->prepare($sql);
    $products->bindValue(":memNo", $_POST['memNo']);
    $products->bindValue(":matPosName", $_POST['matName']);
    $products->bindValue(":mugStatus", '0');
    $products->bindValue(":matPosLSort", $_POST['matLSort']);
    $products->execute();

    //取得自動創號的key值
    $psn = $pdo->lastInsertId();

    $upload_dir = "userStamp/"; //檢查資料夾存不存在
    if (!file_exists($upload_dir)) {
        mkdir($upload_dir);
    }

    $imgDataStr = $_POST['image'];
    //收到convas.toDataURL()送來的資料

    $imgDataStr = str_replace('data:image/png;base64,', '', $imgDataStr); //將檔案格式的資訊拿掉
    // $imgDataStr = str_replace(' ', '+', $imgDataStr);
    $data = base64_decode($imgDataStr);
    var_dump($data);

    //準備好要存的filename

    $fileName = "{$psn}";
    $file = $upload_dir . "user-stamp_" . $fileName . ".png";
    $success = file_put_contents($file, $data);
    if ($success) {

        //將檔案名稱寫回資料庫
        $sql = "update `matpostmark` set matPosUrl = :matPosUrl where matPosNo = $psn";
        $products = $pdo->prepare($sql);
        $products->bindValue(":matPosUrl", "./phps/$file");
        $products->execute();
        echo "新增成功~";
        $pdo->commit();
        echo $file;

    } else {
        $pdo->commit();
        echo 'error';
    }
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
