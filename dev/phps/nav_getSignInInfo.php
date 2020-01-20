<?php 
session_start();
if( isset($_SESSION["memEmail"])){
	$memRow = array("memName"=>$_SESSION["memName"],"memNo"=>$_SESSION["memNo"],"letCount"=>$_SESSION["letCount"],"airCoin"=>$_SESSION["airCoin"],"intColor"=>$_SESSION["intColor"],"memEmail"=>$_SESSION["memEmail"],"matPosUrl"=>$_SESSION["matPosUrl"],"matPatUrl"=>$_SESSION["matPatUrl"],"memPsw"=>$_SESSION["memPsw"],"matPosNo"=>$_SESSION["matPosNo"],"matPatNo"=>$_SESSION["matPatNo"]);
	echo json_encode($memRow);
}else{
	echo "{}";
}
?>