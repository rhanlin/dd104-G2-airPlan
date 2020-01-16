<?php 
try {
	require_once "connectBook_root.php";
	$sql = "select letLikeTime,letTitle,letLikeNo from `letterlike` natural join `letter` where letNo=2 order by letLikeTime asc";
	$letterlike = $pdo -> query($sql);//會取得result set 傳回的資料列

} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}

    $letterlikeRow = $letterlike ->FetchAll(PDO::FETCH_ASSOC);
    echo json_encode( $letterlikeRow );
?>



<!-- select `letter`.*, `letterLike`.* from `letter` left outer join `letterLike` on letter.letNo = letterLike.letNo where memNo=:memNo -->