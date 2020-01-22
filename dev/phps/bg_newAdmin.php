<?php 
try {
	require_once("connectBook_root.php");
	$sql = "insert into `admin` (admPsw, admName, admStatus, admI) values (:admPsw, :admName, :admStatus, :admI)";
	$admin = $pdo->prepare( $sql );
	$admin->bindValue(':admName', $_POST['admName']);
	$admin->bindValue(':admI', $_POST['admI']);
	$admin->bindValue(':admPsw', $_POST['admPsw']);
	$admin->bindValue(':admStatus', 0);
	$admin->execute();

    $sqlS = "select * from `admin` where admI=:admI and admPsw=:admPsw and admName=:admName";
	$adminS = $pdo->prepare($sqlS);
	$adminS->bindValue(':admName', $_POST['admName']);
	$adminS->bindValue(':admI', $_POST['admI']);
	$adminS->bindValue(':admPsw', $_POST['admPsw']);
	$adminS->execute();
	$adminSRow = $adminS->fetch(PDO::FETCH_ASSOC);
	echo json_encode($adminSRow);//送出json字串
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>