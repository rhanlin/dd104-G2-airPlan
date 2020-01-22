<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `letterlike`(memNo,letNo,letLikeTime)values(:memNo,:letNo,:letLikeTime)";
    $likedLet = $pdo->prepare($sql);
    $likedLet->bindValue(":letNo", $_GET["letNo"]);
    $likedLet->bindValue(":memNo", $_GET["memNo"]);
    $likedLet->bindValue(":letLikeTime", $_GET["likeTime"]);
    $likedLet->execute();
    echo json_encode(['status' => 'success']);
    $likedLetNo = $pdo->lastInsertId();

    //撈出要增加airCoin的memNo
    $likedWhoSql = "SELECT l.memNo FROM `letter` l JOIN `letterLike` k ON k.letNo=l.letNo WHERE k.letLikeNo=:letLikeNo";
    $likedWhoNo = $pdo->prepare($likedWhoSql);
    $likedWhoNo->bindValue(':letLikeNo', $likedLetNo);
    $likedWhoNo->execute();
    $likedWhoNoRow = $likedWhoNo->fetch(PDO::FETCH_ASSOC);
    $addMoneySql = "UPDATE `member` SET airCoin=airCoin+100 WHERE memNo=:memNo";
    $addMoney = $pdo->prepare($addMoneySql);
    $addMoney->bindValue(':memNo', $likedWhoNoRow['memNo']);
    $addMoney->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}
