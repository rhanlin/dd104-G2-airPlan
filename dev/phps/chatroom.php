<?php
try {
    require_once "connectBook_chat.php";
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
    $memNo2 = $_POST["memNo2"];
    $chatNo = 0;

    switch ($type) {
        case "mark":
            //聊天室內容
            $sql = "select * 
            from chat join `matpostmark` on (chat.memNo2 = matpostmark.memNo)
            where (((memNo1 = :memNo1 and memNo2 = :memNo2) or (memNo2 = :memNo1 and memNo1 = :memNo2)) and chatNo > :chatNo) and (matpostmark.mugStatus = 1);";
            $content = $pdo->prepare($sql);
            $content->bindValue(":memNo1", $memNo1);
            $content->bindValue(":memNo2", $memNo2);
            $content->bindValue(":chatNo", $chatNo);
            $content->execute();
            $chat = $content->fetchAll(PDO::FETCH_ASSOC);

            //聊天室列表
            // $memNo1 = $_POST["memNo1"];
            // $mname = $_POST["ename"];
            $sql = "select a.memNo,chatTime,b.memNo,b.memName,matPosUrl,mugStatus
            from `chat` join`member` a on(chat.memNo1=a.memNo)join `member`b on(chat.memNo2 = b.memNo) join `matpostmark` on (b.memNo = matpostmark.memNo)
            where a.memNo = :memNo1 and mugStatus = 1
            group by b.memNo
            order by chatTime;";
            $content = $pdo->prepare($sql);
            $content->bindValue(":memNo1", $memNo1);
            $content->execute();
            $mark = $content->fetchAll(PDO::FETCH_ASSOC);
            $data = array("mark" => $mark, "chat" => $chat);
            echo json_encode($data);
            break;

        case "content":
            // 新增聊天內容
            $chatTime = date("Y-m-d H:i:s");
            $sql = "insert into `chat` value(null,:memNo1,:memNo2,:chatTime,:chatContent);";
            $sendText = $pdo->prepare($sql);
            $sendText->bindValue(":memNo1", $memNo1);
            $sendText->bindValue(":memNo2", $memNo2);
            $sendText->bindValue(":chatTime", $chatTime);
            $sendText->bindValue(":chatContent", $_POST["sendText"]);
            $sendText->execute();
            if ($sendText->rowCount() > 0) {
                $sql = 'select * from `chat` where memNo1 = :memNo1 and memNo2 = :memNo2 order by chatTime desc;';
                $newText = $pdo->prepare($sql);
                $newText->bindValue(":memNo1", $memNo1);
                $newText->bindValue(":memNo2", $memNo2);
                $newText->execute();
                $newRow = $newText->fetch(PDO::FETCH_ASSOC);
                echo json_encode($newRow);
            }
            break;
    }
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
