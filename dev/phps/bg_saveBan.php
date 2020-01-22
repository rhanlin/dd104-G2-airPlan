<?php

//=============把後臺審核檢舉資料寫回資料庫的信件和留言表格 更改信件上架狀態 和留言上架狀態=============================================
require_once "connectBook_root.php";
switch ($_POST['type']) {
    case "catching":

        try {
            $sql = "update `letterreport` t,`letter` r set r.letStatus= 0 where t.letNo =r.letNo and t.letRepStatus != 1";
            $letter = $pdo->prepare($sql);
            $letter->execute();

            $sql2 = "select * from `letterreport`";
            $letRep = $pdo->query($sql2);


            $letRepRow = $letRep->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($letRepRow);


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
            $sql = "update `messagereport` t,`message` r set r.msgStatus= 0 where t.msgNo =r.msgNo and t.msgRepStatus != 1";

            $messager = $pdo->prepare($sql);
            $messager->execute();

            $sql2 = "select * from `messagereport`";
            $msgRep = $pdo->query($sql2);

            $msgRepRow = $msgRep->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($msgRepRow);

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
            $emp->bindValue(":msgNo", $_POST['letterNo']);
            $emp->execute();

        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        };
        break;

}
