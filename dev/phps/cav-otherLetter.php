<?php
try {
    require_once("connectBook_root.php");
    $sql = "SELECT DISTINCT h.letNo,l.memNo 'authorNo',l.letTime,l.letTitle,l.letContent,l.imgUrl,l.letStatus,l.letImgUrl FROM `history` h join `letter` l on (h.letNo=l.letNo) where h.memNo = :memNo AND l.letStatus=0 ORDER BY l.letTime DESC
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
        $length = count($letRowOther) - 1;
        for ($i = 0; $i <= $length; $i++) {
            $letRowOther[$i] = str_replace('userUploadImg//', './phps/userUploadImg/', $letRowOther[$i]);
            $data[] = $letRowOther[$i];
        }

        //送出json字串
        echo json_encode($data);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
