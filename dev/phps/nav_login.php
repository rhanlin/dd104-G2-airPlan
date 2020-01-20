<?php 
try {
	require_once("connectBook_root.php");
	$sql = "select `member`.*, `matpostmark`.*, `matpattern`.* from `member` left outer join `matpostmark` on member.memNo = matpostmark.memNo left outer join `matpattern` on member.memNo = matpattern.memNo where member.memEmail=:memEmail and member.memPsw =:memPsw and matpostmark.mugStatus=:mugStatus and matpattern.PatStatus=:PatStatus";
	$member = $pdo->prepare($sql);
	$member->bindValue(':memEmail', $_POST["memEmail"]);
	$member->bindValue(':memPsw', $_POST["memPsw"]);
	$member->bindValue(':mugStatus', 1);
	$member->bindValue(':PatStatus', 1);
	$member->execute();
	if( $member->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
		$memRow = $member->fetch(PDO::FETCH_ASSOC);//取回一筆資料
        session_start();//登入成功,將登入者的資料寫入session
		$_SESSION["memName"] = $memRow["memName"];
		$_SESSION["memEmail"] = $memRow["memEmail"];
	    $_SESSION["memNo"] = $memRow["memNo"];
        $_SESSION["letCount"] = $memRow["letCount"]; 
		$_SESSION["airCoin"] = $memRow["airCoin"];  
		$_SESSION["intColor"] = $memRow["intColor"];   
		$_SESSION["matPosUrl"] = $memRow["matPosUrl"];
		$_SESSION["matPatUrl"] = $memRow["matPatUrl"];
		$_SESSION["memPsw"] = $memRow["memPsw"]; 
		$_SESSION["matPosNo"] = $memRow["matPosNo"];
		$_SESSION["matPatNo"] = $memRow["matPatNo"];
		echo json_encode($memRow);//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>
