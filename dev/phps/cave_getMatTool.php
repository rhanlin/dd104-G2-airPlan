<?php 
try {
	require_once "connectBook_root.php";
	$sql = "select * from `material` where memNo=:memNo and matLSort=:matLSort order by matNo desc";
	$matTool = $pdo->prepare($sql);
    $matTool->bindValue(':memNo', $_POST["memNo"]);
    $matTool->bindValue(':matLSort', 'tool');
	$matTool->execute();
	if( $matTool->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
		$toolRow = $matTool->fetchAll(PDO::FETCH_ASSOC);//取回一筆資料
		echo json_encode($toolRow );//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>