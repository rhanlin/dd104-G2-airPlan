<?php

//=============把商城購買素材完後更新的會員的已持有素材  依照material/postmark/figure 三種matLSort分類寫回資料庫========================
require_once "connectBook_root.php";
try {

    $sql = "insert into `material`(matNo,memNo,matName,matURL,matLSort,matSSort) values(null,:memNo,:matName,:matURL,:matLSort,null)";
    $products = $pdo->prepare($sql);
    $products->bindValue(":memNo", $_POST["memNo"]);
    $products->bindValue(":matName", $_POST["matName"]);
    $products->bindValue(":matURL", $_POST["image"]);
    $products->bindValue(":matLSort", $_POST["matLSort"]);
    $products->execute();
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
