<?php
try {
    require_once("connectBook_root.php");
    $sql = "SELECT mem.memNo,mem.memName,msg.* FROM `member` mem JOIN `message` msg on(mem.memNo=msg.memNo) WHERE msg.letNo=:letNo order by msg.msgTime DESC";
    $replys = $pdo->prepare($sql);
    $replys->bindValue(":letNo", $_GET["letNo"]);
    $replys->execute();

    if ($replys->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $msgRow = $replys->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($msgRow);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}






// try {
//     require_once("connectBook_root.php");
//     $sql = "select * from `letter` l join `message` m on (l.letNo = m.letNo) where `m`.`letNo`=:letNo order by msgTime DESC";
//     $replys = $pdo->prepare($sql);
//     $replys->bindValue(":letNo", $_GET["letNo"]);
//     $replys->execute();

//     if ($replys->rowCount() == 0) { //找不到
//         //傳回空的JSON字串
//         echo "{}";
//     } else { //找得到
//         //取回一筆資料
//         $msgRow = $replys->fetchAll(PDO::FETCH_ASSOC);
//         //送出json字串
//         echo json_encode($msgRow);
//     }
// } catch (PDOException $e) {
//     echo $e->getMessage();
// }
