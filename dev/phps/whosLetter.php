<?php
try {
    require_once("connectBook_cave.php");
    //   $sql = "select letTitle, letTime from `letter` where memNo=:memNo";
    $sql = "select * from `letter` where memNo=2 order by letTime asc ";
    $letter = $pdo->prepare($sql);
    // $letter->bindValue(":memNo", $_GET["memNo"]);
    $letter->execute();

    if ($letter->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $letRow = $letter->fetchAll(PDO::FETCH_ASSOC);
        // $memRow = $letter->fetchObject();  //$memRow->memName
        //送出json字串
        echo json_encode($letRow);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>