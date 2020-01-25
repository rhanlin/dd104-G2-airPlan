<?php 
try {
	require_once("connectBook_root.php");
    $sql = "update `admin` set admName=:admName where admNo=:admNo; update `admin` set admI=:admI where admNo=:admNo; update `admin` set admPsw=:admPsw where admNo=:admNo;";
    $admin = $pdo->prepare($sql);
    $admin->bindValue(':admName', $_POST["admName"]);
    $admin->bindValue(':admI', $_POST["admI"]);
    $admin->bindValue(':admPsw', $_POST["admPsw"]);
    $admin->bindValue(':admNo', $_POST["admNo"]);
    $admin->execute();
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>