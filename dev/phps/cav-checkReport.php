<?php
try {
    require_once("connectBook_root.php");
    // $sql = "select * from `message` m join `messageLike` ml on ( ml.msgNo = m.msgNo) where ml.memNo = :memNo";
    $sql = "select * from `messagereport` where memNo=:memNo";
    $chkReport = $pdo->prepare($sql);
    $chkReport->bindValue(":memNo", $_GET["memNo"]);
    // $chkReport->bindValue(":msgLike", $_GET["likeThis"]);
    // $chkReport->bindValue(":msgLikeTime", $_GET["likeTime"]);
    $chkReport->execute();
    if ($chkReport->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $chkReportRow = $chkReport->fetchAll(PDO::FETCH_ASSOC);
        // $memRow = $letter->fetchObject();  //$memRow->memName
        //送出json字串
        echo json_encode($chkReportRow);
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
