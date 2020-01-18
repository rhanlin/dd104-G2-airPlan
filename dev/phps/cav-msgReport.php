<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `messageReport`(memNo,msgNo,msgRepTime,msgRepReason,msgRepStatus,msgRepPass)values(:memNo,:msgReport,:msgRepTime,:msgRepReason,0,0)";
    $report = $pdo->prepare($sql);
    $report->bindValue(":memNo", $_GET["whoReport"]);
    $report->bindValue(":msgReport", $_GET["reportThis"]);
    $report->bindValue(":msgRepTime", $_GET["reportTime"]);
    $report->bindValue(":msgRepReason", $_GET["msgRepReason"]);
    $report->execute();
    echo json_encode(['status' => 'success']);
    // if ($report->rowCount() == 0) { //找不到
    //     //傳回空的JSON字串
    //     echo "{}";
    // } else { //找得到
    //     //取回一筆資料
    //     $reportRow = $report->fetchAll(PDO::FETCH_ASSOC);
    //     //送出json字串
    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
