<?php
try {
    require_once("connectBook_root.php");
    $sql = "insert into `letterreport`(memNo,letNo,letRepTime,letRepReason,letRepStatus)values(:memNo,:letReport,:letRepTime,:letRepReason,0)";
    $report = $pdo->prepare($sql);
    $report->bindValue(":memNo", $_GET["whoReport"]);
    $report->bindValue(":letReport", $_GET["reportThis"]);
    $report->bindValue(":letRepTime", $_GET["reportTime"]);
    $report->bindValue(":letRepReason", $_GET["letRepReason"]);
    $report->execute();
    if ($report->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";
    } else { //找得到
        //取回一筆資料
        $reportRowLet = $report->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($reportRowLet);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
