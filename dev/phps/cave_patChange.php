<?php
try {
    require_once("connectBook_root.php");
    //將所有圖案預設值設為0
    $sqlOld = "update `matpattern` set PatStatus=:PatStatusOld where memNo=:memNo;";
    $patternOld = $pdo->prepare($sqlOld);
    $patternOld->bindValue(':memNo', $_POST["memNo"]);
    $patternOld->bindValue(':PatStatusOld', 0);
    $patternOld->execute();
    //將被點選更換的圖案預設值設為1
    $sqlNew = "update `matpattern` set PatStatus=:PatStatus where memNo=:memNo and matPatNo=:matPatNo;";
    $patternNew = $pdo->prepare($sqlNew);
    $patternNew->bindValue(':memNo', $_POST["memNo"]);
    $patternNew->bindValue(':matPatNo', $_POST["matPatNo"]);
    $patternNew->bindValue(':PatStatus', 1);
    $patternNew->execute();
    //查詢預設值為1的圖案
    $sqlCheck = "select * from `matpattern` where memNo=:memNo and PatStatus=:PatStatus;";
    $patternCheck = $pdo->prepare($sqlCheck);
    $patternCheck->bindValue(':memNo', $_POST["memNo"]);
    $patternCheck->bindValue(':PatStatus', 1);
    $patternCheck->execute();
    if($patternCheck->rowCount() == 0) { //找不到
        echo "{}";
    }else { //找得到
        $patCheckRow= $patternCheck->fetch(PDO::FETCH_ASSOC);
        echo json_encode($patCheckRow);
        session_start();//更改成功,將預設為1的圖案編號及路徑料寫入session
        $_SESSION["matPatNo"] = $patCheckRow["matPatNo"]; 
        $_SESSION["matPatUrl"] = $patCheckRow["matPatUrl"];
    }
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>