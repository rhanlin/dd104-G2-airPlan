<?php
try {
    require_once("connectBook_cave.php");
    $sql = "select * from `letter` where memNo=${memNo} order by letTime asc ";
    $member = $pdo->query($sql);
    
} catch (PDOException $e) {
    echo "例外行號 : ", $e->getLine(), "<br>";
    echo "例外原因 : ", $e->getMessage(), "<br>";
}
?>


    <!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <title>caveP2</title>
</head>

<body class="cav-body">
    @@include("./layout/nav.html")
    @@include("./layout/header.html")


    <main class="cav-main">
        <!-- 瀏覽信件 -->
        <div class="cav-titleBlock">
            <h1 class="threed-text-yellow-endWhite">瀏覽信件</h1>
        </div>
        <section class="cav-readLetterWrap">
            <div class="cav-boxImg">
                <img class="cav-horiImg" src="./img/cave/letterBox.svg" alt="letterBox">
                <img class="cav-vertImg" src="./img/cave/letterBox-Vertiacal.svg" alt="letterBox-Vertiacal">
                <div class="cav-boxFront">
                    <div class="cav-boxFrontLeft">
                        <div class="cav-whoLetter">
                            <div class="cav-myLetter">
                                <div class="btn click">我的信件</div>
                            </div>

                            <div class="cav-otherLetter">
                                <div class="btn">撈的信件</div>
                            </div>
                        </div>
                        <div class="cav-histLetter1">
                            <div class="cav-histLetter2">
                                <div class="cav-letters cav-looking" data-aaa="sss">
                                    <div class="cav-letWord">
                                        <?php  while ($memberRow = $member->fetch(PDO::FETCH_ASSOC)){?>
                                        <div>
                                            <p class="cav-letTitle"><?= $memberRow["letTitle"] ?></p>
                                        </div>
                                        <div>
                                            <h6 class="cav-letTime"><?= $memberRow["letTime"] ?></h6>
                                        </div>
                                        <?php }?>
                                    </div>
                                    <div class="cav-letSetting">
                                        <div><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="cav-landLetter">
                                            <span class="cav-land ">
                                                <h6>下架信件</h6>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="cav-letters">
                                    <div class="cav-letWord" data-aaa="xxx">
                                        <div>
                                            <p class="cav-letTitle">Title:今晚吃宵嗎?</p>
                                        </div>
                                        <div>
                                            <h6 class="cav-letTime">2019/12/31 10:00</h6>
                                        </div>
                                    </div>
                                    <div class="cav-letSetting">
                                        <div><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="cav-landLetter">
                                            <span class="cav-land">
                                                <h6>下架信件</h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="cav-letters">
                                    <div class=" cav-letWord">
                                        <div>
                                            <p class="cav-letTitle">Title:世界上真的有聖誕老公公嗎?</p>
                                        </div>
                                        <div>
                                            <h6 class="cav-letTime">2019/12/31 8:00</h6>
                                        </div>
                                    </div>
                                    <div class="cav-letSetting">
                                        <div><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="cav-landLetter">
                                            <span class="cav-land">
                                                <h6>下架信件</h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cav-boxFrontRight active">
                        <div class="cav-showLetterBack">
                            <div class="cav-showLetter">
                                <!-- 單一信件 -->
                                <div class="letter-wrap">
                                    <span class="cav-letClose">x</span>
                                    <div class="letter-head">
                                        <div class="stamp-box"></div>
                                        <div class="letter-tittle">
                                            <h3>舍，甲說，這是多麼傷心的事啊！</h3>
                                        </div>
                                    </div>
                                    <div class="letter-contant scroll-container">
                                        <div class="text">
                                            <p>籠罩著街上的煙，日頭是自東徂西，凶惡的他們忍相虐待，那時代，日月不相望的什麼新曆法，什麼是麵皮？在新月微光下的街市，看見鮮紅的血，但是他倆竟會自己走到橋上，就再開始。此刻，新年的一日，那時代，我去拿一面鑼來。在這黑暗之中，阻斷爭論，剛纔經市長一說，只有前進，在做頭老的，他不和人家分擔，不知流失多少人類所託命的田
                                            </p>
                                            <div class="letter-upload-img"></div>
                                            <p>
                                                礙步的石頭，互相提攜，和狺狺的狗吠，又產生有可供消費的勢力，農民播種犁田，現在不是糴不到半斗米？
                                            </p>
                                        </div>
                                        <div class="cav-letNavbar">
                                            <div class="circle threed">
                                                <button class="circle button like">
                                                    <img src="./img/cave/coin.png" alt=""></i></button>
                                            </div>
                                        </div>
                                        <h4 class="cav-h3">留言</h4>
                                        <div class="cav-letComment">
                                            <div class="cav-commMain">
                                                <div class="cav-commHead">
                                                    <div class="cav-commId">空中巴士a321</div>
                                                    <div class="cav-commTime">2019/12/31 12:01</div>
                                                </div>
                                                <p class="cav-commText">派克真的讚讚~</p>
                                            </div>
                                            <div class="cav-commOption">
                                                <div class="cav-commLike">
                                                    <div class="circle threed">
                                                        <button class="circle button like">
                                                            <img src="./img/cave/coin.png" alt=""></i></button>
                                                    </div>
                                                </div>
                                                <div class="cav-commReport">
                                                    <div class="circle threed ">
                                                        <button class="circle button report">
                                                            <img src="./img/cave/exclamation-button.png"
                                                                alt=""></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cav-letComment">
                                            <div class="cav-commMain">
                                                <div class="cav-commHead">
                                                    <div class="cav-commId">波音787</div>
                                                    <div class="cav-commTime">2019/12/31 12:06</div>
                                                </div>
                                                <p class="cav-commText">傳統派+1</p>
                                            </div>
                                            <div class="cav-commOption">
                                                <div class="cav-commLike">
                                                    <div class="circle threed">
                                                        <button class="circle button like">
                                                            <img src="./img/cave/coin.png" alt=""></i></button>
                                                    </div>
                                                </div>

                                                <div class="cav-commReport">
                                                    <div class="circle threed ">
                                                        <button class="circle button report">
                                                            <img src="./img/cave/exclamation-button.png"
                                                                alt=""></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cav-letComment">
                                            <div class="cav-commMain">
                                                <div class="cav-commHead">
                                                    <div class="cav-commId">波音747</div>
                                                    <div class="cav-commTime">2019/12/31 12:17</div>
                                                </div>
                                                <p class="cav-commText">脆皮最高啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                                            </div>
                                            <div class="cav-commOption">
                                                <div class="cav-commLike">
                                                    <div class="circle threed">
                                                        <button class="circle button like">
                                                            <img src="./img/cave/coin.png" alt=""></i></button>
                                                    </div>
                                                </div>
                                                <div class="cav-commReport">
                                                    <div class="circle threed ">
                                                        <button class="circle button report">
                                                            <img src="./img/cave/exclamation-button.png"
                                                                alt=""></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form id="cav-reportForm" action="" method="get">
                                <div class="cav-reportList">
                                    <span class="closeTag">x</span>
                                    <h4>檢舉留言</h4>
                                    <h5>檢舉原因</h5>
                                    <select name="report" id="cav-reportSelector">
                                        <option value="reason" selected disabled>請選擇檢舉原因</option>
                                        <option value="badWord">不雅文字</option>
                                        <option value="abuse">謾罵、挑釁</option>
                                        <option value="hatred">引發仇恨</option>
                                        <option value="ad">廣告訊息</option>
                                    </select><br>
                                    <button class="cav-sendReport" type="submit">送出檢舉</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>

        <!-- 我的物品 -->
        <div class="cav-titleBlock">
            <h1 class="threed-text-yellow-endWhite">我的物品</h1>
        </div>
        <section class="cav-myItem">
            <div class="cav-leftWrap">
                <div class="cav-topBlock">
                    <div class="cav-preview-plan cav-leftBlock-1 -on">
                        <span class="cav-mask-1"></span>
                    </div>
                    <div class="cav-preview-plan cav-leftBlock-2">
                        <span class="cav-mask-2"></span>
                    </div>
                </div>
                <div class="cav-leftBMWrap">
                    <ul class="cav-leftBlockBM">
                        <li><a data-target="cav-leftBlock-1" class="tab1 -on">圖案</a></li>
                        <li><a data-target="cav-leftBlock-2" class="tab1">郵戳</a></li>
                    </ul>
                    <div class="cav-tabWrap">
                        <div class="tab1 cav-leftBlock-1 -on">
                            <div class="cav-prodWrap">
                                <div class="cav-prod cav-prodI wearing"><img src="./img/pattern/plan-pattern-1.svg">
                                </div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-2.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-3.png"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-1.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-2.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-3.png"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-1.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-2.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-3.png"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-1.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-2.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/pattern/plan-pattern-3.png"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/product/decorate/clip-04.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/product/decorate/clip-04.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/product/decorate/clip-04.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/product/decorate/clip-04.svg"></div>
                                <div class="cav-prod cav-prodI"><img src="./img/product/decorate/clip-04.svg"></div>
                            </div>
                        </div>
                        <div class="tab1 cav-leftBlock-2">
                            <div class="cav-prodWrap">
                                <div class="cav-prod cav-prodU wearing"><img src="./img/catch-letter/user-stamp/user-stamp_1.png">
                                </div>
                                <div class="cav-prod cav-prodU"><img src="./img/catch-letter/user-stamp/user-stamp_2.png"></div>
                                <div class="cav-prod cav-prodU"><img src="./img/catch-letter/user-stamp/user-stamp_3.png"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cav-botBlock">
                        <div id="btns" class="btns">
                            <div class="orderBtnBoxGroup ">
                                <div class="orderBtnBox ">
                                    <div class="orderBtn">
                                        <div class="orderText">
                                            <h6>更換</h6>
                                        </div>
                                    </div>
                                    <div class="orderBtnBottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="cav-rightWrap">
                <ul class="cav-rightBlockBM">
                    <li><a data-target="cav-rightBlock-1" class="tab2 -on">素材</a></li>
                    <li><a data-target="cav-rightBlock-2" class="tab2">DIY</a></li>
                </ul>
                <img src="./img/cave/bookshelf.svg" alt="">
                <div class="cav-tabWrap">
                    <div class="tab2 cav-rightBlock-1 -on">
                        <div class="cav-prodWrap">
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-prod"><img src="./img/product/decorate/clip-04.svg"></div>
                            <div class="cav-addProd"><a href="./shop.html"><img src="./img/cave/add.svg"></a></div>
                        </div>
                    </div>
                    <div class="tab2 cav-rightBlock-2">
                        <div class="cav-prodWrap">
                            <div class="cav-prod"><img src="https://via.placeholder.com/150"></div>
                            <div class="cav-prod"><img src="https://via.placeholder.com/150"></div>
                            <div class="cav-prod"><img src="https://via.placeholder.com/150"></div>
                        </div>
                    </div>
                </div>
                <div class="cav-pc">
                    <div class="cav-paper">信紙:</div>
                    <div class="cav-coin">Air幣:</div>
                </div>
            </div>
        </section>
    </main>

    @@include("./layout/footer.html")


    <script src="./js/cave.js"></script>
    <!-- <script src="./js/btn.js"></script> -->
</body>

</html>


