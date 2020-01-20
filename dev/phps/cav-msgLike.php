<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `messagelike`(memNo,msgNo,msgLikeTime)values(:memNo,:msgLike,:msgLikeTime)";
    $liked = $pdo->prepare($sql);
    $liked->bindValue(":msgLike", $_GET["likeThis"]);
    $liked->bindValue(":memNo", $_GET["whoLike"]);
    $liked->bindValue(":msgLikeTime", $_GET["likeTime"]);
    $liked->execute();
    echo json_encode(['status' => 'success']);
    $liked = $pdo->lastInsertId();

    //撈出要增加airCoin的memNo
    $msgLikeSql = "SELECT m.memNo FROM `message` m JOIN `messagelike` ml ON ml.msgNo=m.msgNo WHERE ml.msgLikeNo=:msgLikeNo";
    $likedMsg = $pdo->prepare($msgLikeSql);
    $likedMsg->bindValue(':msgLikeNo', $liked);
    $likedMsg->execute();
    $likedMsgRow = $likedMsg->fetch(PDO::FETCH_ASSOC);
    $addMoneySql = "UPDATE `member` SET airCoin=airCoin+100 WHERE memNo=:memNo";
    $addMoney = $pdo->prepare($addMoneySql);
    $addMoney->bindValue(':memNo', $likedMsgRow['memNo']);
    $addMoney->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}
