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
    // if ($report->rowCount() == 0) { //找不到
    //     //傳回空的JSON字串
    //     echo "{}";
    // } else { //找得到
    //     //取回一筆資料
    //     $reportRowLet = $report->fetchAll(PDO::FETCH_ASSOC);
    //     //送出json字串
    //     echo json_encode($reportRowLet);
    // }
} catch (PDOException $e) {
    echo $e->getMessage();
}
