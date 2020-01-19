<?php
try {
    require_once("connectBook_root.php");
    $type = $_POST["type"];
    // $type = "prodAdd";


    // echo $type;
    switch ($type) {
        case "member":
            $sql = "select * from `member`;";
            $member = $pdo->prepare($sql);
            $member->execute();
            $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($memberRow);

            break;


        case "prodMod":
            $sql = "select * from product ;";
            $prodMod = $pdo->prepare($sql);
            $prodMod->execute();
            $prodModRow = $prodMod->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($prodModRow);

            break;

        case "prodAdd":
            if (isset($_FILES['file']["name"])) {

                switch ($_FILES['file']['error']) {
                    case 0:
                        if (file_exists("img") == false) {
                            mkdir("img");
                        }
                        $from = $_FILES['file']['tmp_name'];
                        $to = "img/" . $_FILES['file']["name"];
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
                        echo $_FILES['file']['error'];
                }
            }

            $sql = "insert into `product`(prodNo,prodName,matNameCH,matInfo,matChance,prodPrice,prodUrl,prodStatus,prodLSort,prodSSort)
            values(null, :pname,:pnameCH,:pInfo,:pchance,:price,:image,:pStatus,:pLsort,:pSsort)";
            $products = $pdo->prepare($sql);
            $products->bindValue(":pname", $_POST['pname']);
            $products->bindValue(":pnameCH", $_POST['pnameCH']);
            $products->bindValue(":pInfo", $_POST['pInfo']);
            $products->bindValue(":pchance", $_POST['pchance']);
            $products->bindValue(":price", $_POST['price']);
            $products->bindValue(":image", $_FILES['file']["name"]);
            $products->bindValue(":pStatus", $_POST['pStatus']);
            $products->bindValue(":pLsort", $_POST['pLsort']);
            $products->bindValue(":pSsort", $_POST['pSsort']);
            $products->execute();

            break;
    }
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
