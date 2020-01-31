<?php
try {
    require_once("connectBook_root.php");
    $sql = "SELECT ml.memNo 'mlmemNo',ml.msgNo 'mlmsgNo',mr.memNo 'mrmemNo',mr.msgNo 'mrmsgNo' FROM `messagelike` ml JOIN `messagereport` mr ON(ml.memNo=mr.memNo) WHERE ml.memNo= :memNo";
    $chkClick = $pdo->prepare($sql);
    $chkClick->bindValue(":memNo", $_GET["memNo"]);
    $chkClick->execute();
    if ($chkClick->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $chkClickRow = $chkClick->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($chkClickRow);
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
