<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `letterlike`(memNo,letNo,letLikeTime)values(:memNo,:letNo,:letLikeTime)";
    $likedLet = $pdo->prepare($sql);
    $likedLet->bindValue(":letNo", $_GET["likeThis"]);
    $likedLet->bindValue(":memNo", $_GET["whoLike"]);
    $likedLet->bindValue(":letLikeTime", $_GET["likeTime"]);
    $likedLet->execute();

    if ($likedLet->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $likeRowLet = $likedLet->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串

        echo json_encode($likeRowLet);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
