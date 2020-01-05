<?php
echo "123";
// if (!isset($_POST["image"])) {
//     die("Post was empty.");
// }
require_once "connectBook_shop.php";
try {

    // remove "data:image/png;base64," from image data.
    // $data = str_replace("data:image/png;base64,", "", $data);
    // // save to file
    // $dataUrl = file_put_contents("customeImg/image1.png", base64_decode($data));

    $sql = "insert into `material`(matNo,memNo,matName,matURL,matLSort,matSSort) values(null,:memNo,:matName,:matURL,null,null)";
    $products = $pdo->prepare($sql);
    $products->bindValue(":memNo", "5");
    $products->bindValue(":matName", $_POST["matName"]);
    $products->bindValue(":matURL", $_POST["image"]);
    // $products->bindValue(":matData", $dataUrl);
    $products->execute();

    $affected_rows = $products->rowCount();
    echo $affected_rows;

} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}
?>