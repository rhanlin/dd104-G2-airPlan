<?php

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

        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;

    case "saving":
        try {

            $sql = "update `letterreport` set letRepStatus =:letRepStatus where letNo =:letNo";
            $emp = $pdo->prepare($sql);
            $emp->bindValue(":letRepStatus", $_POST['newNumber']);
            $emp->bindValue(":letNo", $_POST['letterNoNum']);
            $emp->execute();

        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;
    case "catchingComment":

        try {
            $sql = "select * from `messagereport`";
            $product = $pdo->query($sql);
            if ($product->rowCount() == 0) {
                echo "{}";
            } else {
                $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
                //送出json字串
                echo json_encode($productRow);

            }
        
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;

    case "savingComment":
        try {
    
            $sql = "update `messagereport` set msgRepStatus =:msgRepStatus where msgNo =:msgNo";
            $emp = $pdo->prepare($sql);
            $emp->bindValue(":msgRepStatus", $_POST['newNumber']);
            $emp->bindValue(":msgNo", $_POST['msgNo']);
            $emp->execute();

        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;

        case "savingComment2":
          try {
      
              $sql = "update `messagereport` set msgRepPass =:msgRepPass where msgNo =:msgNo";
              $emp = $pdo->prepare($sql);
              $emp->bindValue(":msgRepPass", $_POST['newNumber']);
              $emp->bindValue(":msgNo", $_POST['msgNo']);
              $emp->execute();
  
          } catch (PDOException $e) {
              echo "例外原因 : ", $e->getMessage(), "<br>";
              echo "例外行號 : ", $e->getLine();
          };
          break;
}