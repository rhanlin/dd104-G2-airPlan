<?php 
try {
	// $dsn = "mysql:host=localhost;port=3306;dbname=dd104g2;charset=utf8";
	// $user = "howard";
	// $password = "h0322";
	// $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
	// $pdo = new PDO($dsn, $user, $password, $options);
	require_once "connectBook_root.php";
	$sql = "select letLikeTime,letTitle,letLikeNo from `letterlike` natural join `letter` where memNo=2 order by letLikeTime asc";
	$letterlike = $pdo -> query($sql);//會取得result set 傳回的資料列

} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}

    $letterlikeRow = $letterlike ->FetchAll(PDO::FETCH_ASSOC);
    echo json_encode( $letterlikeRow );
?>