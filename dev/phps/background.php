<?php
try {
    require_once("connectBook_root.php");
    $type = $_POST["type"];
    switch ($type) {
        case "member":
            $sql = "select * from `member`;";
            $member = $pdo->prepare($sql);
            $member->execute();
            $memberRow = $member->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($memberRow);

            break;
    }
    
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
