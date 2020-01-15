<?php 
session_start();
if( isset($_SESSION["memEmail"])){
	$memRow = array("memName"=>$_SESSION["memName"],"memNo"=>$_SESSION["memNo"],"letCount"=>$_SESSION["letCount"],"airCoin"=>$_SESSION["airCoin"],"intColor"=>$_SESSION["intColor"],"memEmail"=>$_SESSION["memEmail"],"matPosUrl"=>$_SESSION["matPosUrl"],"memPsw"=>$_SESSION["memPsw"]);
	echo json_encode($memRow);
}else{
	echo "{}";
}
?>