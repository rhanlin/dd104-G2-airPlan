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
    // if ($liked->rowCount() == 0) { //找不到
    //     //傳回空的JSON字串
    //     echo "{}";
    // } else { //找得到
    //     //取回一筆資料
    //     $likeRow = $liked->fetch(PDO::FETCH_ASSOC);
    //     //送出json字串

    //     echo json_encode($likeRow);
    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}


// try {
//     require_once("connectBook_root.php");
//     $sql = "insert into `messagelike`(memNo,msgNo,msgLikeTime)values(:memNo,:msgLike,:msgLikeTime)";
//     $liked = $pdo->prepare($sql);
//     $liked->bindValue(":msgLike", $_GET["likeThis"]);
//     $liked->bindValue(":memNo", $_GET["whoLike"]);
//     $liked->bindValue(":msgLikeTime", $_GET["likeTime"]);
//     $liked->execute();

//     $sql2 = " select memNo,msgNo,msgLikeTime from `messagelike` where memNo=:memNo and msgNo=:msgLike and msgLikeTime=:msgLikeTime";
//     $liked2 = $pdo->prepare($sql2);
//     $liked2->bindValue(":msgLike", $_GET["likeThis"]);
//     $liked2->bindValue(":memNo", $_GET["whoLike"]);
//     $liked2->bindValue(":msgLikeTime", $_GET["likeTime"]);
//     $liked2->execute();
//     if ($liked2->rowCount() == 0) { //找不到
//         //傳回空的JSON字串
//         echo "{}";
//     } else { //找得到
//         //取回一筆資料
//         $likeRow2 = $liked2->fetch(PDO::FETCH_ASSOC);
//         //送出json字串

//         echo json_encode($likeRow2);
//         session_start();
//         $_SESSION["msgNo"] = $likeRow2["msgNo"];
//         $_SESSION["memNo"] = $likeRow2["memNo"];
//         $_SESSION["msgLikeTime"] = $likeRow2["msgLikeTime"];
//     }
// } catch (PDOException $e) {
//     echo $e->getMessage();
// }
