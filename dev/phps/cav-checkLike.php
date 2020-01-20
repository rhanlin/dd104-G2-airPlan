<?php
// try { 暫廢
//     require_once("connectBook_root.php");
//     // $sql = "select * from `message` m join `messageLike` ml on ( ml.msgNo = m.msgNo) where ml.memNo = :memNo";
//     $sql = "select * from `messageLike` where memNo=:memNo";
//     $chkLike = $pdo->prepare($sql);
//     $chkLike->bindValue(":memNo", $_GET["memNo"]);
//     // $chkLike->bindValue(":msgLike", $_GET["likeThis"]);
//     // $chkLike->bindValue(":msgLikeTime", $_GET["likeTime"]);
//     $chkLike->execute();
//     if ($chkLike->rowCount() == 0) { //找不到
//         //傳回空的JSON字串
//         echo "{}";
//     } else { //找得到
//         //取回一筆資料
//         $chkLikeRow = $chkLike->fetchAll(PDO::FETCH_ASSOC);
//         // $memRow = $letter->fetchObject();  //$memRow->memName
//         //送出json字串
//         echo json_encode($chkLikeRow);
//     }
// } catch (PDOException $e) {
//     echo $e->getMessage();
// }








// session_start();
// if (isset($_SESSION["msgNo"])) {
//     $likeRow2 = array("msgNo" => $_SESSION["msgNo"], "memNo" => $_SESSION["memNo"], "msgLikeTime" => $_SESSION["msgLikeTime"]);
//     echo json_encode($likeRow2);
// } else {
//     echo "{}";
// }
