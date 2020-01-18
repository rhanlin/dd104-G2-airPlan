<?php 
try {
	require_once "connectBook_root.php";
	$sql = "select * from `matpattern` where memNo=:memNo order by matPatNo desc";
	$pattern = $pdo->prepare($sql);
    $pattern->bindValue(':memNo', $_POST["memNo"]);
	$pattern->execute();
	if( $pattern->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
		$patternRow = $pattern->fetchAll(PDO::FETCH_ASSOC);//取回一筆資料
		echo json_encode($patternRow );//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>