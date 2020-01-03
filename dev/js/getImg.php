<?php
require_once "connectBook_shop.php";
try {

    $sql = "select * from `material` where memNo='5'";
    $material = $pdo->query($sql);
    if ($material->rowCount() == 0) { //找不到
      //傳回空的JSON字串
      echo "{}";
  } else { //找得到
      //取回一筆資料
      $materialRow = $material->fetch(PDO::FETCH_ASSOC);
      //$memberRow=$member->fetch({PDO::FATCH_NUM})
      // $memberRow=$member->fetchObject();
      //送出json字串
      echo json_encode($materialRow);

  }

} catch (PDOException $e) {
    echo "例外原因 : ", $e->getMessage(), "<br>";
    echo "例外行號 : ", $e->getLine();
}

?>