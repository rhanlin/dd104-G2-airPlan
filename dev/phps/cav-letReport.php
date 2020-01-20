<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `letterreport`(memNo,letNo,letRepTime,letRepReason,letRepStatus)values(:memNo,:letReport,:letRepTime,:letRepReason,0)";
    $reportLet = $pdo->prepare($sql);
    $reportLet->bindValue(":memNo", $_GET["whoReport"]);
    $reportLet->bindValue(":letReport", $_GET["reportThis"]);
    $reportLet->bindValue(":letRepTime", $_GET["reportTime"]);
    $reportLet->bindValue(":letRepReason", $_GET["letRepReason"]);
    $reportLet->execute();
    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
    echo $e->getMessage();
}
