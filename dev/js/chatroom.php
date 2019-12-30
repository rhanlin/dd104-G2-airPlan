<?php
try{
    $dsn = "mysql:host=localhost;post=3306;dbname=dd104g2;charset=utf8";
    $user = "root";
    $password = "qwert2321";
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,PDO::ATTR_ORACLE_NULLS => PDO::NULL_NATURAL);
    $pdo = new PDO($dsn,$user,$password,$options);
    $type = $_POST["type"];
    switch($type)
    {
        case "chat":
            $memNo1 = $_POST["memNo1"];
            $memNo2 = $_POST["memNo2"];
            $chatNo = $_POST["chatNo"];
            $sql = "select * from chat where ((memNo1 = :memNo1 and memNo2 = :memNo2) or (memNo2 = :memNo1 and memNo1 = :memNo2)) and chatNo > :chatNo";
            $content = $pdo->prepare($sql);
            $content->bindValue(":memNo1", $memNo1);
            $content->bindValue(":memNo2", $memNo2);
            $content->bindValue(":chatNo", $chatNo);
            $content->execute();
            $chat = $content->fetchAll(PDO::FETCH_ASSOC);
            echo json_decode($chat);
            break;
    }
    
}catch(PDOException $e){
    echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";
}

// if(){}
?>