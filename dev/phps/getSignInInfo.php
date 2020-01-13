<?php 
session_start();
if( isset($_SESSION["memEmail"])){
	$memRow = array("memNo"=>$_SESSION["memNo"],"letCount"=>$_SESSION["letCount"],"airCoin"=>$_SESSION["airCoin"]);
	echo json_encode($memRow);
}else{
	echo "{}";
}
?>