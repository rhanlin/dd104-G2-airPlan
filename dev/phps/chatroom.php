<?php
try {
    require_once "connectBook_chat.php";
    //會員資料
    // if ($_SESSION["memNo1"]) {
    //     $memNo1 = $_SESSION["memNo1"];
    // } else {
    //     echo"未登入";
    // }

    $type = $_POST["catch"];
    // exit($type);
    
    switch ($type) {
        case "mark":
            //聊天室內容
            $memNo1 = 1;
            $memNo2 = 2;
            $chatNo = 0;
            //session_start();
            // $memNo1 = $_session["memNo1"];
            // $memNo2 = $_session["memNo2"];
            // $chatNo = $_session["chatNo"];
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
            $memNo1 = 1;
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
            // if(){}
            $sendText->fetch(PDO::FETCH_ASSOC);
            break;
    }
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}