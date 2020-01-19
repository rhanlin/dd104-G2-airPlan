<?php
try {
    require_once("connectBook_root.php");
    $sql = "INSERT INTO `chat` (memNo1,memNo2,chatTime,chatContent) VALUES(:memNo1,:memNo2,null,null)";
    $chat = $pdo->prepare($sql);
    $chat->bindValue(":memNo1", $_GET["whoLaunchChat"]);
    $chat->bindValue(":memNo2", $_GET["whoGotChat"]);
    $chat->execute();
    echo json_encode(['status' => 'success']);
    // if ($chat->rowCount() == 0) { //找不到
    //     //傳回空的JSON字串
    //     echo "{}";
    // } else { //找得到
    //     //取回一筆資料
    //     $chatRow = $chat->fetchAll(PDO::FETCH_ASSOC);
    //     //送出json字串
    //     echo json_encode($chatRow);
    // }
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
