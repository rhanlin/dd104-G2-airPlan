<?php

//====================測試能否順利撈取和顯示存入material表格的所有圖檔===========================
require_once "connectBook_shop.php";
try {

    $sql = "select `matName`,`matURL` from `material` where memNo=:memNo and (matLSort='material' or matLSort='tool')";
    // $sql = "select `matName`,`matURL` from `material` where memNo='5'";
    $material = $pdo->prepare($sql);
    $material->bindValue(":memNo", $_GET["memNo"]);
    $material->execute();
    if ($material->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else {
        $materialRow = $material->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($materialRow);
    }
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
