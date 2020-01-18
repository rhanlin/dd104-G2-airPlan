<?php 
try {
	require_once "connectBook_root.php";
	// $sql = "select `messageLike`.msgLikeTime, `message`.msgContent,`messageLike`.memNo from `message` left outer join `messagelike` on message.msgNo = messageLike.msgNo where message.memNo=:memNo order by msgLikeTime desc";
	$sql = "select `messageLike`.msgLikeTime, `message`.msgContent,`messageLike`.memNo, `member`.memName from `message` left outer join `messageLike` on message.msgNo = messageLike.msgNo left outer join `member` on messageLike.memNo = member.memNo  where message.memNo=:memNo and messageLike.memNo = member.memNo order by msgLikeTime desc";
	$msgLike = $pdo->prepare($sql);
	$msgLike->bindValue(':memNo', $_GET["memNo"]);
	$msgLike->execute();
	if( $msgLike->rowCount() == 0 ){ //找不到
        echo "{}";//傳回空的JSON字串
    }else{ //找得到
		$msgLikeRow = $msgLike->fetchAll(PDO::FETCH_ASSOC);//取回一筆資料
		echo json_encode($msgLikeRow );//送出json字串
    } 
} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";		
}
?>
