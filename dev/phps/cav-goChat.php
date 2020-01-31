<?php
try {
    require_once("connectBook_root.php");
    $sql = "INSERT INTO `chat` (memNo1,memNo2,chatTime,chatContent) VALUES(:memNo1,:memNo2,null,null)";
    $chat = $pdo->prepare($sql);
    $chat->bindValue(":memNo1", $_GET["whoLaunchChat"]);
    $chat->bindValue(":memNo2", $_GET["whoGotChat"]);
    $chat->execute();
    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
    echo $e->getMessage();
}
