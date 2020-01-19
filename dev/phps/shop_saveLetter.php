<?php

//=============把商城購買商品完後更新的會員air幣寫回資料庫=============================================
require_once "connectBook_root.php";
try {

    $sql = "update `member` set letCount =:letCount where memNo =:memNo";
    $emp = $pdo->prepare($sql);
    $emp->bindValue(":letCount", $_POST['remainLet']);
    $emp->bindValue(":memNo", $_POST["memNo"]);
    
    $emp->execute();
    session_start();
    $_SESSION["letCount"] = $_POST['remainLet'];

} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
