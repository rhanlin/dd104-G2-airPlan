<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `messageReport`(memNo,msgNo,msgRepTime,msgRepReason,msgRepStatus)values(:memNo,:msgReport,:msgRepTime,:msgRepReason,0)";
    $report = $pdo->prepare($sql);
    $report->bindValue(":memNo", $_GET["whoReport"]);
    $report->bindValue(":msgReport", $_GET["reportThis"]);
    $report->bindValue(":msgRepTime", $_GET["reportTime"]);
    $report->bindValue(":msgRepReason", $_GET["msgRepReason"]);
    $report->execute();
    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
    echo $e->getMessage();
}
