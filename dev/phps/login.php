<!-- 登入 -->
<?php 
try {
    require_once "connectBook_userSetting.php";
    $sql = "select * from `member` where memEmail='{$_POST["memEmail"]}'";
    $sql2 = "select * from `member` where memEmail='{$_POST["memEmail"]}' and memPsw='{$_POST["memPsw"]}'";
    $memberE = $pdo->query($sql);
    $memberP = $pdo->query($sql2);
    $row_memberE = $memberE->fetch(PDO::FETCH_ASSOC);
    $row_memberP = $memberP->fetch(PDO::FETCH_ASSOC);
	if($row_memberE){
        if($row_memberP){
            echo "<script>alert(`登入成功`); location.href = '../home.html';</script>";
            // echo '<meta http-equiv=REFRESH CONTENT=1;url=member.php>';
        }
        else{
            echo "<script>alert(`密碼錯誤`); location.href = '../home.html';</script>";
        }
	}
	else{
        echo "<script>alert(`無此Email`); location.href = '../home.html';</script>";
	}
} 
catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(),"<br>";
	echo "例外原因 : ", $e->getMessage(),"<br>";	
}
?>