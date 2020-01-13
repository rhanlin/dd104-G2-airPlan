<?php

//====================把會員目前持有的air幣 從資料庫中撈回，顯示在頁面右上角的fixed區塊===========================
require_once "connectBook_shop.php";
try {

    $sql = "select * from `member` where memNo=:memNo";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memNo", $_GET["memNo"]);
    $member->execute();
    if ($member->rowCount() == 0) {
        echo "{}";
    } else {
        $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memberRow);
    }
} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
