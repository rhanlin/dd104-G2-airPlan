<?php
require_once "connectBook_root.php";
switch ($_GET['get']) {

//===============頁面onload後直接抓回64筆商城卡片資料給vue data=>items===============================
    case "shop_axios_post":
        try {

            $sql = "select prodUrl from `product`";
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
        }
        break;
//====================測試能否順利撈取和顯示存入material表格的所有圖檔===========================
    case "shop_getmaterial":

        try {

            $sql = "select `matName`,`matURL` from `material` where memNo=:memNo and (matLSort='material' or matLSort='tool')";
            // $sql = "select `matName`,`matURL` from `material` where memNo='5'";
            $material = $pdo->prepare($sql);
            $material->bindValue(":memNo", $_GET["memNo"]);
            // $material->bindValue(":memNo", '2');
            $material->execute();
            if ($material->rowCount() == 0) { //找不到
                //傳回空的JSON字串
                echo "{}";
            } else {
                $materialRow = $material->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($materialRow);
            }
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        }
        break;

//     //====================把會員目前持有的air幣 從資料庫中撈回，顯示在頁面右上角的fixed區塊===========================
    case "shop_getMemberCoin":
        try {

            $sql = "select * from `member` where memNo=:memNo ";
            $member = $pdo->prepare($sql);
            $member->bindValue(":memNo", $_GET['memNo']);
            $member->execute();
            if ($member->rowCount() == 0) {
                // echo "{}";
            } else {
                $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);
                // session_start(); //登入成功,將登入者的資料寫入session
                // $_SESSION["airCoin"] = $memberRow["airCoin"];
                echo json_encode($memberRow);
            }
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        }
        break;

//     //====================測試能否順利撈取和顯示存入material表格的所有圖檔===========================
    case "shop_getOnlyMaterial":
        try {

            $sql = "select `matName`,`matURL` from `material` where memNo=:memNo and matLSort='material'";
            // $sql = "select `matName`,`matURL` from `material` where memNo='5'";
            $material = $pdo->prepare($sql);
            $material->bindValue(":memNo", $_GET["memNo"]);
            $material->execute();
            if ($material->rowCount() == 0) { //找不到
                //傳回空的JSON字串
                // echo "{}";
            } else {
                $materialRow = $material->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($materialRow);
            }
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        }
        break;

    //====================測試能否順利撈取和顯示存入material表格的所有圖檔===========================
    case "shop_getonlyTool":
        try {

            $sql = "select `matName`,`matURL` from `material` where memNo=:memNo  and matLSort='tool'";
            // $sql = "select `matName`,`matURL` from `material` where memNo='5'";
            $material = $pdo->prepare($sql);
            $material->bindValue(":memNo", $_GET["memNo"]);
            $material->execute();
            if ($material->rowCount() == 0) { //找不到
                //傳回空的JSON字串
                echo "{}";
            } else {
                $materialRow = $material->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($materialRow);
            }
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        }
        break;

    //=============把商城的商品清單從資料庫撈出 放上各自跳窗頁面=============================================
    case "shop_prodItemGetInfo":
        try {
            $sql = "select `matNameCH`,`matInfo`,`matChance`,`prodPrice`  from `product`";
            $product = $pdo->query($sql);
            if ($product->rowCount() == 0) { //找不到
                //傳回空的JSON字串
                echo "{}";
            } else { //找得到
                //取回一筆資料
                $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
                //送出json字串
                // print_r($productRow) ;
                echo json_encode($productRow);

            }
        } catch (PDOException $e) {
            echo "例外原因 : ", $e->getMessage(), "<br>";
            echo "例外行號 : ", $e->getLine();
        }
        break;

}
