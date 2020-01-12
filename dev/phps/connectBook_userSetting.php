<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=dd104g2;charset=utf8";
	$user = "root";
    $password = "t1901167";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>