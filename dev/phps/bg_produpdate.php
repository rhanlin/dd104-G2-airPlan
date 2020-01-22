<?php
try {
  require_once("connectBook_root.php");
   
    
    if ($_POST['prodLSort_update'] == 0) {
        $_POST['prodLSort_update'] = "figure";
    } else if ($_POST['prodLSort_update'] == 1) {
        $_POST['prodLSort_update'] = "postmark";
    } else if ($_POST['prodLSort_update'] == 2) {
        $_POST['prodLSort_update'] = "DIY";
    } else if ($_POST['prodLSort_update'] == 3) {
        $_POST['prodLSort_update'] = "letter";
    }
    $prodLSort_update=$_POST['prodLSort_update'];
    $file_update = $_FILES['file_update']["name"];
 
    if (isset($_FILES['file_update']["name"])) {

        switch ($_FILES['file_update']['error']) {
            case 0:
                if (file_exists("../img") == false) {
                    mkdir("../img");
                }
                $from = $_FILES['file_update']['tmp_name'];
                $to = "../img/product/".$prodLSort_update. "/" .$file_update;
                // echo $from, "<br>";
                // echo $to, "<br>";
                if (copy($from, $to)) {
                    echo "新增成功";
                } else {
                    echo "上傳圖檔失敗";
                }
                break;
            case 1:
                echo "檔案太大 不得超過", ini_get("upload_max_filesize");
                break;
            case 2:
                echo "檔案太大 不得超過", $_POST["MAX_FILE_SIZE"];
                break;
            case 3:
                echo "上傳過程發生錯誤, 請重送<br>";
                break;
            case 4:
                echo "您没選檔案<br>";
                break;
            default:
                echo $_FILES['file_update']['error'];
        }
    }
    $prodLSort_update=$_POST['prodLSort_update'];
    $filePath = "./img/product/".$prodLSort_update."/" .$file_update;
    $sql = "update `product` set  prodName=:pname,matNameCH=:pnameCH,matInfo=:pInfo,prodPrice=:price,
    prodUrl=:upFile ,prodLSort=:pLsort where prodNo=:prodNo";
    $products = $pdo->prepare($sql);
    $products->bindValue(":prodNo", $_POST['prodNo_update']);
    $products->bindValue(":pname", $_POST['prodName_update']);
    $products->bindValue(":pnameCH", $_POST['matNameCH_update']);
    $products->bindValue(":pInfo", $_POST['matInfo_update']);
    $products->bindValue(":price", $_POST['prodPrice_update']);
    $products->bindValue(":upFile", $filePath);

    if ($_POST['prodLSort_update'] == "figure") {
        $_POST['prodLSort_update'] = 0;
    } else if ($_POST['prodLSort_update'] == "postmark") {
        $_POST['prodLSort_update'] = 1;
    } else if ($_POST['prodLSort_update'] == "DIY") {
        $_POST['prodLSort_update'] = 2;
    } else if ($_POST['prodLSort_update'] == "letter") {
        $_POST['prodLSort_update'] = 3;
    }
    $products->bindValue(":pLsort", $_POST['prodLSort_update']);
    $products->execute();
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
