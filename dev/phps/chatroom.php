<?php
try {
    require_once "connectBook_root.php";
    //會員資料
    session_start();
    // include 'login.php';
    // echo json_encode($_SERVER["memNo"]);
    if (isset($_SESSION["memNo"])) {
        $memNo1 = $_SESSION["memNo"];
    } else {
        echo"未登入";
    }

    $type = $_POST["catch"];
    $memNo1 = $_SESSION["memNo"];
    $chatNo = 0;

    switch ($type) {
        case "chat":
            // 聊天室內容
            $memNo2 = $_POST["memNo2"];
            $sql = 'select memNo from `member` where memName = :memNo2;';
            $member = $pdo->prepare($sql);
            $member->bindValue(":memNo2", $memNo2);
            $member->execute();
            $memNo2Row = $member->fetch(PDO::FETCH_ASSOC);

            $sql = "select * 
            from chat join `matpostmark` on (chat.memNo2 = matpostmark.memNo)
            where (((memNo1 = :memNo1 and memNo2 = :memNo2) or (memNo2 = :memNo1 and memNo1 = :memNo2)) and chatNo > :chatNo) and (matpostmark.mugStatus = 1);";
            $content = $pdo->prepare($sql);
            $content->bindValue(":memNo1", $memNo1);
            $content->bindValue(":memNo2", $memNo2Row['memNo']);
            $content->bindValue(":chatNo", $chatNo);
            $content->execute();
            $chat = $content->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($chat);
        break;

        case "mark":
            //聊天室列表
            $sql = "select a.memNo as 'user1',a.memName as 'mem1',chatTime,b.memNo as 'user2',b.memName as 'mem2',matPosUrl,mugStatus
            from `chat` join `member` a on (chat.memNo1=a.memNo) join `member`b on(chat.memNo2 = b.memNo) join `matpostmark` on (b.memNo = matpostmark.memNo)
            where ((a.memNo = :memNo1 or b.memNo = :memNo1) and mugStatus = 1)
            group by b.memNo
            order by chatTime desc;";
            $content = $pdo->prepare($sql);
            $content->bindValue(":memNo1", $memNo1);
            $content->execute();
            $mark = $content->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($mark);
        break;

        case "content":
            // 新增聊天內容
            $memNo2 = $_POST["memNo2"];
            $sql = 'select memNo from `member` where memName = :memNo2;';
            $member = $pdo->prepare($sql);
            $member->bindValue(":memNo2", $memNo2);
            $member->execute();
            $memNo2Row = $member->fetch(PDO::FETCH_ASSOC);


            $chatTime = date("Y-m-d H:i:s");
            $sql = "insert into `chat` value(null,:memNo1,:memNo2,:chatTime,:chatContent);";
            $sendText = $pdo->prepare($sql);
            $sendText->bindValue(":memNo1", $memNo1);
            $sendText->bindValue(":memNo2", $memNo2Row['memNo']);
            $sendText->bindValue(":chatTime", $chatTime);
            $sendText->bindValue(":chatContent", $_POST["sendText"]);
            $sendText->execute();
            if ($sendText->rowCount() > 0) {
                $sql = 'select * from `chat` where memNo1 = :memNo1 and memNo2 = :memNo2 order by chatTime desc;';
                $newText = $pdo->prepare($sql);
                $newText->bindValue(":memNo1", $memNo1);
                $newText->bindValue(":memNo2", $memNo2Row['memNo']);
                $newText->execute();
                $newRow = $newText->fetch(PDO::FETCH_ASSOC);
                echo json_encode($newRow);
            } else {
                $sql = 'select * from `chat` where memNo1 = :memNo1 and memNo2 = :memNo2 ;';
                $newText = $pdo->prepare($sql);
                $newText->bindValue(":memNo1", $memNo1);
                $newText->bindValue(":memNo2", $memNo2Row['memNo']);
                $newText->execute();
                $newRow = $newText->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($newRow);
            }
        break;
    }
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
