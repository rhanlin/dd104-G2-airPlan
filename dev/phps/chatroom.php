<?php
try {
    $dsn = "mysql:host=localhost;post=3306;dbname=dd104g2;charset=utf8";
    $user = "root";
    $password = "qwert2321";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_ORACLE_NULLS => PDO::NULL_NATURAL);
    $pdo = new PDO($dsn, $user, $password, $options);

    //會員資料
    // if ($_SESSION["memNo1"]) {
    //     $memNo1 = $_SESSION["memNo1"];
    // } else {
    //     echo"未登入";
    // }

    //聊天室內容
    $memNo1 = 1;
    $memNo2 = 2;
    $chatNo = 0;
    // $memNo1 = $_POST["memNo1"];
    // $memNo2 = $_POST["memNo2"];
    // $chatNo = $_POST["chatNo"];
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
    $sql = "select a.memNo,b.memNo,b.memName,matPosUrl,mugStatus
            from `chat` join`member` a on(chat.memNo1=a.memNo)join `member`b on(chat.memNo2 = b.memNo) join `matpostmark` on (b.memNo = matpostmark.memNo)
            where a.memNo = :memNo1 and mugStatus = 1
            order by a.memNo;";
    $content = $pdo->prepare($sql);
    $content->bindValue(":memNo1", $memNo1);
    $content->execute();
    $mark = $content->fetchAll(PDO::FETCH_ASSOC);
    $data = array("mark" => $mark, "chat" => $chat);
    echo json_encode($data);
    
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}

// if(){}
