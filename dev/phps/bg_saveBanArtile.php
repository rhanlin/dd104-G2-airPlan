<?php

// session_start();
//=============把商城購買商品完後更新的會員air幣寫回資料庫=============================================
require_once "connectBook_root.php";
switch ($_POST['type']) {
    case "catching":

        try {
            $sql = "select * from `letterreport`";
            $product = $pdo->query($sql);
            if ($product->rowCount() == 0) {
                echo "{}";
            } else {
                $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
                //送出json字串
                echo json_encode($productRow);

            }
            // $_SESSION["airCoin"] = $_POST['remainCoin'];

        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;

// case "saving":
        // try {

//     $sql = "update `letterreport` set letRepStatus =:letRepStatus where letNo =:letNo";
        //     $emp = $pdo->prepare($sql);
        //     $emp->bindValue(":letRepStatus", $_POST['letRepStatus']);
        //     $emp->bindValue(":letNo", $_POST["letNo"]);
        //     $emp->execute();
        //     echo
        //     // $_SESSION["airCoin"] = $_POST['remainCoin'];

// } catch (PDOException $e) {
        //     echo "例外原因 : ", $e->getMessage(), "<br>";
        //     echo "例外行號 : ", $e->getLine();
        // };
        // break;
}
