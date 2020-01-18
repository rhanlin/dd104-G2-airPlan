<?php 
try {
	require_once "connectBook_root.php";
	// $sql = "select  `letterLike`.letLikeTime, `letter`.letTitle,`letterLike`.memNo  from `letter` left outer join `letterLike` on letter.letNo = letterLike.letNo where letter.memNo=:memNo order by letLikeTime desc";
	$sql = "select  `letterLike`.letLikeTime, `letter`.letTitle,`letterLike`.memNo, `member`.memName  from `letter` left outer join `letterLike` on letter.letNo = letterLike.letNo left outer join `member` on letterLike.memNo = member.memNo where letter.memNo=:memNo and letterLike.memNo = member.memNo order by letLikeTime desc";
	$letLike = $pdo->prepare($sql);
	$letLike->bindValue(':memNo', $_GET["memNo"]);
	$letLike->execute();
	if( $letLike->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
		$letLikeRow = $letLike->fetchAll(PDO::FETCH_ASSOC);//取回一筆資料
		echo json_encode($letLikeRow );//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>