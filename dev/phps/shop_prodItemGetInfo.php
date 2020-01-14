<?php

//=============把商城的商品清單從資料庫撈出 放上各自跳窗頁面=============================================
try {
  require_once "connectBook_root.php";
    $sql = "select `matNameCH`,`matInfo`,`matChance`,`prodPrice`  from `product`";
    $product = $pdo->query($sql);
    if ($product->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        // print_r($productRow) ;
        echo json_encode($productRow);

    }
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
