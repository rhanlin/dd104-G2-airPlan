<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=dd104g2;charset=utf8";
	$user = "popo0324";
  $password = "po17311731";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>