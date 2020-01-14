<!-- 修改會員資料 -->
<?php 
try {
    require_once "connectBook_root.php";
	$sql2 = "select * from `member` where memEmail='{$_POST["memEmail"]}'";
	$memPsw = $_POST['memPsw'];
	$memPswAgain = $_POST['memPswAgain'];
    $result=$pdo->query($sql2);
    $row_result=$result->fetch(PDO::FETCH_ASSOC)
	if($row_result){
		echo "<script>alert(`此Email已註冊過`); location.href = '../home.html';</script>";
	}
	else{
		if($memPsw == $memPswAgain){
			$sql = "insert into `member` (memName, memPsw, memEmail, letCount, airCoin, intColor) values (:memName, :memPsw, :memEmail, :letCount, :airCoin, :intColor)";
			$member = $pdo->prepare( $sql );
			$member->bindValue(':memName', '波音');
			$member->bindValue(':memPsw', $_POST['memPsw']);
			$member->bindValue(':memEmail', $_POST['memEmail']);
			$member->bindValue(':letCount', 5);
			$member->bindValue(':airCoin', 50);
			$member->bindValue(':intColor', 1);
			$member->execute();
			if($member){
                echo "<script>alert(`你好,你已註冊成功`); location.href = '../home.html';</script>";
			}
			else{
				echo "<script>alert(`註冊失敗！！白癡喔！！不要亂玩啦`); location.href = '../home.html';</script>";
			}
		}
		else{
			echo "<script>alert(`密碼確認與第一次不同`); location.href = '../home.html';</script>";
		}
	}
} 
catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";	
}
?>