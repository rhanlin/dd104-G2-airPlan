<?php
try {
    require_once("connectBook_cave.php");
    $sql = "select * from `message` where letNo=:letNo order by msgTime DESC";
    // $sql = "select * from `message` where letNo=11 order by msgTime DESC";
    // $sql = "select * from `message` order by msgTime DESC";
    $replys = $pdo->prepare($sql);
    $replys->bindValue(":letNo", $_GET["letNo"]);
    $replys->execute();

    if ($replys->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $msgRow = $replys->fetchAll(PDO::FETCH_ASSOC);
        // $msgRow = $replys->fetchObject(); 
        //送出json字串
        echo json_encode($msgRow);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
