<?php

//=============把商城購買素材完後更新的會員的已持有素材  依照material/postmark/figure 三種matLSort分類寫回資料庫========================
require_once "connectBook_root.php";
try {
    $pdo->beginTransaction();

    $sql = "insert into `matpattern`(matPatNo,memNo,matPatName,matPatUrl,matPatLSort,matPatSSort) values(null,:memNo,:matPatName,'',:matPatLSort,null)";
    $products = $pdo->prepare($sql);
    $products->bindValue(":memNo", $_POST['memNo']);
    $products->bindValue(":matPatName", $_POST['matName']);
    $products->bindValue(":matPatLSort", $_POST['matLSort']);
    $products->execute();

    //取得自動創號的key值
    $psn = $pdo->lastInsertId();

    $upload_dir = "userPattern/"; //檢查資料夾存不存在
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
    $file = $upload_dir . "plan-pattern-" . $fileName . ".png";
    $success = file_put_contents($file, $data);
    if ($success) {

        //將檔案名稱寫回資料庫
        $sql = "update `matpattern` set matPatUrl = :matPatUrl where matPatNo = $psn";
        $products = $pdo->prepare($sql);
        $products->bindValue(":matPatUrl", "./phps/$file");
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
