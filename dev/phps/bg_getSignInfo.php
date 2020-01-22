<?php 
session_start();
if( isset($_SESSION["admI"])){
	$adminRow = array("admNo"=>$_SESSION["admNo"],"admPsw"=>$_SESSION["admPsw"],"admName"=>$_SESSION["admName"],"admStatus"=>$_SESSION["admStatus"],"admI"=>$_SESSION["admI"]);
	echo json_encode($adminRow);
}else{
	echo "{}";
}
?>