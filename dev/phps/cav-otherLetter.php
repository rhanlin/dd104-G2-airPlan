<?php
try {
    require_once("connectBook_root.php");
    $sql = "SELECT DISTINCT h.letNo,l.letNo,l.letTime,l.letTitle,l.letContent,l.imgUrl,l.letImgUrl FROM `history` h join `letter` l on (h.letNo=l.letNo) where h.memNo = :memNo ORDER BY l.letTime DESC
    ";
    $letterOther = $pdo->prepare($sql);
    $letterOther->bindValue(":memNo", $_POST["memNo"]);
    $letterOther->execute();

    if ($letterOther->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $letRowOther = $letterOther->fetchAll(PDO::FETCH_ASSOC);
        $letRowOther = str_replace('userUploadImg//', './phps/userUploadImg/', $letRowOther);
        // $memRow = $letterOther->fetchObject();  //$memRow->memName
        //送出json字串
        echo json_encode($letRowOther);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
