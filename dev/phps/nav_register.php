<?php 
try {
	require_once("connectBook_root.php");
    $sqlE = "select * from `member` where memEmail=:memEmail";
	$memberE = $pdo->prepare($sqlE);
	$memberE->bindValue(':memEmail', $_POST["memEmail"]);
	$memberE->execute();
	if( $memberE->rowCount() == 0 ){ //尚未註冊過
		$sql = "insert into `member` (memName, memPsw, memEmail, letCount, airCoin, intColor) values (:memName, :memPsw, :memEmail, :letCount, :airCoin, :intColor)";
		$member = $pdo->prepare( $sql );
		$member->bindValue(':memName', $_POST['memName']);
		$member->bindValue(':memPsw', $_POST['memPsw']);
		$member->bindValue(':memEmail', $_POST['memEmail']);
		$member->bindValue(':letCount', 1);
		$member->bindValue(':airCoin', 1000);
		$member->bindValue(':intColor', 0);
		$member->execute();

		$sqlS = "select * from `member` where memEmail=:memEmail";
		$memberS = $pdo->prepare($sqlS);
		$memberS->bindValue(':memEmail', $_POST["memEmail"]);
		$memberS->execute();
		$memRowRS = $memberS->fetch(PDO::FETCH_ASSOC);
		echo json_encode($memRowRS);//送出json字串

		$matpostmarkMemNo=$memRowRS["memNo"];
		$sqlM = "insert into `matpostmark` (memNo, matPosName, matPosUrl, mugStatus, matPosLSort, matPosSSort) values (:memNo, :matPosName, :matPosUrl, :mugStatus, :matPosLSort, :matPosSSort)";
		$matpostmark = $pdo->prepare($sqlM);
		$matpostmark->bindValue(':memNo',$matpostmarkMemNo );
		$matpostmark->bindValue(':matPosName', '郵戳');
		$matpostmark->bindValue(':matPosUrl', './phps/userStamp/user-stamp-default-3.png');
		$matpostmark->bindValue(':mugStatus', '1');
		$matpostmark->bindValue(':matPosLSort', 'postmark');
		$matpostmark->bindValue(':matPosSSort', 'postmark');
		$matpostmark->execute();
		
		$matpatternMemNo=$memRowRS["memNo"];
		$sqlP = "insert into `matpattern` (memNo, matPatName, matPatUrl, PatStatus, matPatLSort, matPatSSort) values (:memNo, :matPatName, :matPatUrl, :PatStatus, :matPatLSort, :matPatSSort);";
		$matpattern = $pdo->prepare($sqlP);
		$matpattern->bindValue(':memNo',$matpatternMemNo );
		$matpattern->bindValue(':matPatName', '圖案');
		$matpattern->bindValue(':matPatUrl', './phps/userPattern/plan-pattern-2.png');
		$matpattern->bindValue(':PatStatus', '1');
		$matpattern->bindValue(':matPatLSort', 'pattern');
		$matpattern->bindValue(':matPatSSort', 'pattern');
		$matpattern->execute();
	}else{ //已註冊過
		echo "{}";//傳回空的JSON字串
	}
}catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>