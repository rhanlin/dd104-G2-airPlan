<?php
session_start();
//=============把商城購買商品完後更新的會員air幣寫回資料庫=============================================
require_once "connectBook_root.php";
try {

    $sql = "update `member` set airCoin =:airCoin where memNo =:memNo";
    $emp = $pdo->prepare($sql);
    $emp->bindValue(":airCoin", $_POST['remainCoin']);
    $emp->bindValue(":memNo", $_POST["memNo"]);
    $emp->execute();
    $_SESSION["airCoin"] = $_POST['remainCoin'];

} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
