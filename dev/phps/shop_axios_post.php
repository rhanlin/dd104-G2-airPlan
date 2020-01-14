<?php
//===============頁面onload後直接抓回64筆商城卡片資料給vue data=>items===============================
try {
    require_once "connectBook_root.php";
    $sql = "select prodUrl from `product`";
    $product = $pdo->query($sql);
    if ($product->rowCount() == 0) { 
        echo "{}";
    } else { 
        $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($productRow);

    }
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
