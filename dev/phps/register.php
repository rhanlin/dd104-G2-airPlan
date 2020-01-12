<?php 
try {
	require_once("connectBook_userSetting.php");
    $sqlE = "select * from `member` where memEmail=:memEmail";
	$memberE = $pdo->prepare($sqlE);
	$memberE->bindValue(':memEmail', $_POST["memEmail"]);
	$memberE->execute();
	if( $memberE->rowCount() == 0 ){ //尚未註冊過
		$sql = "insert into `member` (memName, memPsw, memEmail, letCount, airCoin, intColor) values (:memName, :memPsw, :memEmail, :letCount, :airCoin, :intColor)";
		$member = $pdo->prepare( $sql );
		$member->bindValue(':memName', '波音');
		$member->bindValue(':memPsw', $_POST['memPsw']);
		$member->bindValue(':memEmail', $_POST['memEmail']);
		$member->bindValue(':letCount', 5);
		$member->bindValue(':airCoin', 500);
		$member->bindValue(':intColor', 1);
		$member->execute();

		$sqlS = "select * from `member` where memEmail=:memEmail";
		$memberS = $pdo->prepare($sqlE);
		$memberS->bindValue(':memEmail', $_POST["memEmail"]);
		$memberS->execute();
		$memRowRS = $memberS->fetch(PDO::FETCH_ASSOC);
		echo json_encode($memRowRS);//送出json字串
	}
	else{ //已註冊過
		echo "{}";//傳回空的JSON字串
	}
}
catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>



