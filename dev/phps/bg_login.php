<?php 
try {
	require_once("connectBook_root.php");
	$sql = "select * from `admin` where (admI = :admId) and (admPsw = :admPsw);";
	$admin = $pdo->prepare($sql);
	$admin->bindValue(':admId', $_POST["admId"]);
    $admin->bindValue(':admPsw', $_POST["admPsw"]);
    // $admin->bindValue(':admId', "dd104");
	// $admin->bindValue(':admPsw', "158");
	$admin->execute();
	if( $admin->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
        $adminRow = $admin->fetch(PDO::FETCH_ASSOC);//取回一筆資料
        session_start();//登入成功,將登入者的資料寫入session
		$_SESSION["admNo"] = $adminRow["admNo"];
		$_SESSION["admPsw"] = $adminRow["admPsw"];
	    $_SESSION["admName"] = $adminRow["admName"];
        $_SESSION["admStatus"] = $adminRow["admStatus"]; 
		$_SESSION["admI"] = $adminRow["admI"];  
		echo json_encode($adminRow);//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>
