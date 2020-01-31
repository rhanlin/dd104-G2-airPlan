<?php
try {
    require_once("connectBook_root.php");
    $sql = "select * from `letter` where memNo=:memNo AND letStatus=0 order by letTime DESC ";
    $letter = $pdo->prepare($sql);
    $letter->bindValue(":memNo", $_POST["memNo"]);
    $letter->execute();

    if ($letter->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $letRow = $letter->fetchAll(PDO::FETCH_ASSOC);
        $length = count($letRow) - 1;
        for ($i = 0; $i <= $length; $i++) {
            $letRow[$i] = str_replace('userUploadImg//', './phps/userUploadImg/', $letRow[$i]);
            $data[] = $letRow[$i];
        }

        //送出json字串
        echo json_encode($data);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
