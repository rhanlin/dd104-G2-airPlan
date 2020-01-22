<?php
try {
    require_once("connectBook_root.php");
    $sql = "select * from `letter` where memNo=:memNo order by letTime DESC ";
    $letter = $pdo->prepare($sql);
    $letter->bindValue(":memNo", $_POST["memNo"]);
    $letter->execute();

    if ($letter->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $letRow = $letter->fetch(PDO::FETCH_ASSOC);
        $letRow = str_replace('userUploadImg//', './phps/userUploadImg/', $letRow);
        // $memRow = $letter->fetchObject();  //$memRow->memName
        //送出json字串
        $data=[$letRow];
        echo json_encode($data);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
