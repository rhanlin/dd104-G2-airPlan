<?php
try {
    require_once("connectBook_root.php");
    $sql = "select * from `letterlike` where memNo=:memNo";
    $chkLikeLet = $pdo->prepare($sql);
    $chkLikeLet->bindValue(":memNo", $_GET["memNo"]);
    $chkLikeLet->execute();
    if ($chkLikeLet->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $chkLikeLetRow = $chkLikeLet->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($chkLikeLetRow);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}








// session_start();
// if (isset($_SESSION["msgNo"])) {
//     $likeRow2 = array("msgNo" => $_SESSION["msgNo"], "memNo" => $_SESSION["memNo"], "msgLikeTime" => $_SESSION["msgLikeTime"]);
//     echo json_encode($likeRow2);
// } else {
//     echo "{}";
// }
