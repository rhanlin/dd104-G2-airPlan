<?php
try {
    require_once("connectBook_root.php");
    $sqlColor = "update `member` set intColor=:intColor where memNo=:memNo;";
    $memberColor = $pdo->prepare($sqlColor);
    $memberColor->bindValue(':intColor', $_POST["intColor"]);
    $memberColor->bindValue(':memNo', $_POST["memNo"]);
    $memberColor->execute();
        
    $sqlColorCheck = "select * from `member` where memNo=:memNo and intColor=:intColor";
    $ColorCheck = $pdo->prepare($sqlColorCheck);
    $ColorCheck->bindValue(':intColor', $_POST["intColor"]);
    $ColorCheck->bindValue(':memNo', $_POST["memNo"]);
    $ColorCheck->execute();
    $ColorRowCheck= $ColorCheck->fetch(PDO::FETCH_ASSOC);


    // session_start();//登入成功,將登入者的資料寫入session
    // unset($_SESSION["intColor"]);
    // $_SESSION["intColor"] = $memRow["intColor"]; 
    
    echo json_encode($ColorRowCheck);//送出json字串
} 
catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>