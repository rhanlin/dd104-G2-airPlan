$(document).ready(function () {
  async function cavAjax() {
    /* AJAX  撈取我的信件、撈取信件內容  */
    await $.ajax({
      url: "./phps/cav-whosLetter.php",
      type: "POST",
      dataType: "json",
      data: {
        memNo: $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]
      },

      success: function (letRow) {
        console.log(letRow);
        let myLet = "";
        let letTit = "";
        let fullLet = new Array();
        // console.log($("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]);

        for (i = 0; i < letRow.length; i++) {
          myLet = myLetter(
            i,
            myLet,
            letRow[i].letTitle,
            letRow[i].letTime,
            letRow[i].letNo,
          ); //撈取歷史信件
          fullLet.push([
            letRow[i].imgUrl,
            letRow[i].letTitle,
            letRow[i].letContent,
            letRow[i].letTime,
            letRow[i].memNo,
            letRow[i].letNo,
          ]); //單一信件所需內容
          // console.log(fullLet);

          $(".cav-histLetter2").html(myLet);
        }


        /* 點擊歷史信件秀出對應信件標題、內文、圖片 */
        function letterContent(fullLet) {
          let firstLook = $(".cav-looking").find(".cav-letTitle").text();
          console.log(firstLook);
          for (let i = 0; i < fullLet.length; i++) {
            if (firstLook == fullLet[i][1]) {
              $(".letter-img").css("backgroundImage", "url(" + fullLet[i][0] + ")");
              $(".letter-tittle").children("h5").text(fullLet[i][1]);
              $(".text").children("p").text(fullLet[i][2]);
              $(".letter-time").text(fullLet[i][3]);
              $(".letter-author").text("no." + fullLet[i][4]);
              $(".letChat").attr("disabled", "disabled");
              // $(".letChat").attr("data-letChat", fullLet[i][4]);
              $(".letLike").attr("data-letLike", fullLet[i][5]);
              $(".letReport").attr("data-letReport", fullLet[i][5]);
              $(".letChat").attr("id", "letChat" + fullLet[i][5]);
              $(".letLike").attr("id", "letLike" + fullLet[i][5]);
              $(".letReport").attr("id", "letReport" + fullLet[i][5]);
              // $(".cav-letNo").text("no." + fullLet[i][3]);
              console.log(fullLet[i][1]);
              console.log($(".letChat").attr("id", "letChat" + fullLet[i][4]));

              break;
            }
          }


          $(".cav-letters").on("click", function () {
            letTit = $(this).find(".cav-letTitle").text();
            console.log(letTit);
            // console.log(fullLet)

            for (let i = 0; i < fullLet.length; i++) {
              if (letTit == fullLet[i][1]) {
                $(".letter-img").css("backgroundImage", "url(" + fullLet[i][0] + ")");
                $(".letter-tittle").children("h5").text(fullLet[i][1]);
                $(".text").children("p").text(fullLet[i][2]);
                $(".letter-time").text(fullLet[i][3]);
                $(".letter-author").text("no." + fullLet[i][4]);
                $(".letChat").attr("disabled", "disabled");
                // $(".letChat").attr("data-letChat", fullLet[i][4]);
                $(".letLike").attr("data-letLike", fullLet[i][5]);
                $(".letReport").attr("data-letReport", fullLet[i][5]);
                $(".letChat").attr("id", "letChat" + fullLet[i][5]);
                $(".letLike").attr("id", "letLike" + fullLet[i][5]);
                $(".letReport").attr("id", "letReport" + fullLet[i][5]);
                // $(".cav-letNo").text("no." + fullLet[i][3]);
                console.log(fullLet[i][1]);
                break;
              }
            }
          });
        }
        letterContent(fullLet);

        /* 檢查信件是否已被打賞 */
        // $(function checkLetLike() {
        //   let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
        //   console.log(chat77);
        //   $.ajax({
        //     url: "./phps/cav-checkLikeLet.php",
        //     type: "GET",
        //     dataType: "json",
        //     data: { "memNo": memNo },
        //     success: function (chkLikeLetRow) {
        //       console.log(chkLikeLetRow);
        //       let msgNum = new Array();

        //       // console.log("會員編號", memNo); 6
        //       // console.log("有打賞", chkLikeLetRow); 6
        //       // console.log("信件", msgRow); 6
        //       // console.log("有打賞過信件編號", chkLikeLetRow[0].letNo); 6
        //       // console.log("信件編號", chkLikeLetRow[0].letNo); 6
        //       for (let i = 0; i < letRow.length; i++) {
        //         //撈出所有回覆
        //         letReply = letterReply(
        //           letReply,
        //           letRow[i].memNo,
        //           letRow[i].letTime,
        //           letRow[i].letContent,
        //           letRow[i].letNo,
        //         );
        //         letNum[i] = letRow[i].msgNo;
        //         $(".cav-replys").html(letReply);
        //       }
        //       for (i = 0; i < chkLikeLetRow.length; i++) {
        //         // console.log(chkLikeLetRow[i].mlmsgNo);

        //         if ($.inArray(chkLikeLetRow[i].mlmsgNo, msgNum) != -1 && memNo == chkLikeLetRow[i].mlmemNo) {

        //           $("#like" + chkLikeLetRow[i].mlmsgNo).attr({ "data-like": chkLikeLetRow[i].mlmsgNo, "disabled": true });

        //         }
        //         else {
        //           console.log("沒有被打賞過");
        //         }
        //       }
        //     },
        //     error: function (chkLikeLetRow) {
        //       console.log(chkLikeLetRow);
        //     },
        //   });
        // });


        /*---結束--- */
      },
      error: function (letRow) {
        console.log(letRow);
      }
    });


    /* 點擊觸發mine 顯示我的歷史信件*/
    $(".cav-myLetter").on("click", function mine() {
      // console.log("我的");
      $.ajax({
        url: "./phps/cav-whosLetter.php",
        type: "POST",
        dataType: "json",
        data: {
          memNo: $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]
        },

        success: function (letRow) {
          // console.log(letRow);
          let myLet = "";
          // let letTit = "";
          let fullLet = new Array();
          // console.log($("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]);

          for (i = 0; i < letRow.length; i++) {
            myLet = myLetter(
              i,
              myLet,
              letRow[i].letTitle,
              letRow[i].letTime,
              letRow[i].letNo,
            ); //撈取歷史信件
            fullLet.push([
              letRow[i].imgUrl,
              letRow[i].letTitle,
              letRow[i].letContent,
              letRow[i].letTime,
              letRow[i].memNo,
              letRow[i].letNo,
            ]); //單一信件所需內容
            // console.log(fullLet);

            $(".cav-histLetter2").html(myLet);
          }

          /* 點擊歷史信件秀出對應信件標題、內文、圖片 */
          function letterContent(fullLet) {
            let firstLook = $(".cav-looking").find(".cav-letTitle").text();
            for (let i = 0; i < fullLet.length; i++) {
              if (firstLook == fullLet[i][1]) {
                $(".letter-img").css("backgroundImage", "url(" + fullLet[i][0] + ")");
                $(".letter-tittle").children("h5").text(fullLet[i][1]);
                $(".text").children("p").text(fullLet[i][2]);
                $(".letter-time").text(fullLet[i][3]);
                $(".letter-author").text("no." + fullLet[i][4]);
                $(".letChat").attr("disabled", "disabled");
                // $(".letChat").attr("data-letChat", fullLet[i][4]);
                $(".letLike").attr("data-letLike", fullLet[i][5]);
                $(".letReport").attr("data-letReport", fullLet[i][5]);
                $(".letChat").attr("id", "letChat" + fullLet[i][5]);
                $(".letLike").attr("id", "letLike" + fullLet[i][5]);
                $(".letReport").attr("id", "letReport" + fullLet[i][5]);
                console.log(fullLet[i][1]);
                break;
              }
            }
            $(".cav-letters").on("click", function () {
              letTit = $(this).find(".cav-letTitle").text();
              // console.log(letTit);
              // console.log(fullLet)
              for (let i = 0; i < fullLet.length; i++) {
                if (letTit == fullLet[i][1]) {
                  $(".letter-img").css("backgroundImage", "url(" + fullLet[i][0] + ")");
                  $(".letter-tittle").children("h5").text(fullLet[i][1]);
                  $(".text").children("p").text(fullLet[i][2]);
                  $(".letter-time").text(fullLet[i][3]);
                  $(".letter-author").text("no." + fullLet[i][4]);
                  $(".letChat").attr("disabled", "disabled");
                  // $(".letChat").attr("data-letChat", fullLet[i][4]);
                  $(".letLike").attr("data-letLike", fullLet[i][5]);
                  $(".letReport").attr("data-letReport", fullLet[i][5]);
                  $(".letChat").attr("id", "letChat" + fullLet[i][5]);
                  $(".letLike").attr("id", "letLike" + fullLet[i][5]);
                  $(".letReport").attr("id", "letReport" + fullLet[i][5]);
                  console.log(fullLet[i][1]);
                  break;
                }
              }
            });
          }
          letterContent(fullLet);

          /*自動撈取第一封信件回覆 */
          $(function changeFirstMsg() {
            let firstLookMsg = $(".cav-looking").find(".cav-letTitle").attr("data-letter-num");
            $.ajax({
              url: "./phps/cav-letMessage.php",
              type: "GET",
              dataType: "json",
              data: { letNo: firstLookMsg },
              success: function (msgRow) {
                // console.log("信件回復", msgRow); 6
                // let letReply = "";
                // console.log(msgRow);
                // console.log($.isEmptyObject(msgRow) == false);
                if ($.isEmptyObject(msgRow) == false) {
                  $(function checkClickedBefore() {
                    let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
                    // let mesgNo = msgRow[i].msgNo;
                    // console.log(msgRow[j].msgNo);
                    // console.log(memNo); 6
                    $.ajax({
                      url: "./phps/cav-checkClickedBefore.php",
                      type: "GET",
                      dataType: "json",
                      data: { "memNo": memNo },
                      success: function (chkClickRow) {
                        // console.log(chkClickRow);
                        let letReply = "";
                        let msgNum = new Array();

                        // console.log("會員編號", memNo); 6
                        // console.log("有打賞", chkClickRow); 6
                        // console.log("留言", msgRow); 6
                        // console.log("有打賞過留言編號", chkClickRow[0].msgNo); 6
                        // console.log("留言編號", msgRow[0].msgNo); 6


                        for (let j = 0; j < msgRow.length; j++) {
                          //撈出所有回覆
                          letReply = letterReply(
                            letReply,
                            msgRow[j].memNo,
                            msgRow[j].msgTime,
                            msgRow[j].msgContent,
                            msgRow[j].msgNo,
                          );
                          msgNum[j] = msgRow[j].msgNo;
                          $(".cav-replys").html(letReply);
                        }

                        // console.log(msgNum);
                        // console.log(chkClickRow);
                        for (i = 0; i < chkClickRow.length; i++) {
                          // console.log(chkClickRow[i].mlmsgNo);

                          if ($.inArray(chkClickRow[i].mlmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mlmemNo) {
                            // console.log(msgNum);
                            // console.log(chkClickRow[i].mlmsgNo);
                            // $("#" + chkClickRow[i].mlmsgNo).attr("disabled", true);
                            $("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true });
                            // console.log($("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true }));
                            // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                            // console.log($("#like"));
                            // console.log(chkClickRow[i].mlmsgNo);
                            // console.log($("#like" + chkClickRow[i].mlmsgNo));

                          }
                          else {
                            console.log("沒有被打賞過");

                          }
                        }
                        // console.log(chkClickRow);
                        for (i = 0; i < chkClickRow.length; i++) {
                          // console.log(chkClickRow[i].mrmsgNo);

                          if ($.inArray(chkClickRow[i].mrmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mrmemNo) {
                            // console.log(msgNum);
                            // console.log(chkClickRow[i].mrmsgNo);
                            // $("#" + chkClickRow[i].msgNo).attr("disabled", true);
                            $("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true });
                            // console.log($("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true }));
                            // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                          }
                          else {
                            console.log("沒有被檢舉過");
                          }
                        }

                      },
                      error: function (chkClickRow) {
                        console.log(chkClickRow);
                      },
                    });
                  });

                  /* AJAX *註冊* 打賞留言跳金幣,並只能打賞一次 */
                  $(document).on("click", ".like", function (e) {
                    e.stopPropagation;
                    e.stopImmediatePropagation;
                    // console.log(e.target.parentNode);
                    let obj = e.target.parentNode.dataset.like;
                    console.log(obj);
                    // let likeThis = $(this).attr("data-like");
                    let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
                    let now = new Date();
                    let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                      " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                    // console.log("被打賞留言編號:", likeThis);
                    console.log("被打賞留言編號:", obj);
                    console.log("打賞者", whoLike);
                    console.log("打賞時間", likeTime);
                    $.ajax({
                      url: "./phps/cav-msgLike.php",
                      type: "GET",
                      dataType: "json",
                      data: {
                        "likeThis": obj,
                        "whoLike": whoLike,
                        "likeTime": likeTime,
                      },
                      success: function (likeRow) {
                        console.log(likeRow);
                        if (likeRow.status == 'success') {
                          $("#like" + obj).attr("disabled", true);
                          // obj.disabled = true; //這邊要改為指定按鈕 現在只是數字
                          // console.log($("#like" + obj));
                          // console.log(obj);
                          // console.log(666);
                        } else {
                          console.log(111);
                        }
                      },
                      error: function (likeRow) {
                        console.log(likeRow);
                      }
                    });
                    $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
                    console.log("coin");
                    setTimeout(() => {
                      $(".cav-commId").removeClass("active");
                    }, 1000);
                    // $(this).attr("disabled", true);
                  });

                  /* AJAX *註冊* 檢舉留言跳窗 */
                  var reportThis;
                  $(document).on("click", ".report", function (e) {
                    obj1 = e.target.parentNode;
                    reportThis = $(this).on("click").attr("data-report");//被檢舉留言
                    $(".cav-reportList").toggle();
                  });
                  $(".closeTag").on("click", function () {
                    $(".cav-reportList").css("display", "none");
                  });
                  $(".cav-sendReport").on("click", function () {
                    if ($("#cav-reportSelector").val() == null) {
                      alert("請選擇原因");
                      console.log($("#cav-reportSelector").val());
                    } else {
                      $(".cav-reportList").toggle();
                      alert("檢舉已送出，我們將盡速審核");
                      let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
                      let now = new Date();//檢舉時間
                      let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                      let msgRepReason = $("#cav-reportSelector").val();//檢舉原因
                      console.log(reportThis);
                      console.log(whoReport);
                      console.log(reportTime);
                      console.log(msgRepReason);
                      $.ajax({
                        url: "./phps/cav-msgReport.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                          "whoReport": whoReport,
                          "reportThis": reportThis,
                          "reportTime": reportTime,
                          "msgRepReason": msgRepReason,
                        },
                        success: function (reportRow) {
                          console.log(reportRow);
                          if (reportRow.status == 'success') {
                            // obj1.disabled = true;
                            $("#report" + obj1).attr("disabled", true);
                            console.log(obj1);
                            // console.log(666);
                          } else {
                            console.log(111);
                          }
                        },
                        error: function (reportRow) {
                          console.log(reportRow);
                        }
                      });
                      // e.preventDefault();
                    }
                  });
                } else {
                  let letNoReply = "";
                  letNoReply = letterNoReply();
                  $(".cav-replys").html(letNoReply);
                }

              },
              error: function (msgRow) {
                console.log(msgRow);
              }
            });
          });

          /*---結束--- */
        },
        error: function (letRow) {
          console.log(letRow);
        }
      });
    });


    /* 點擊觸發other 顯示撈的歷史信件*/
    $(".cav-otherLetter").on("click", function others() {
      console.log("撈的");
      $.ajax({
        url: "./phps/cav-otherLetter.php",
        type: "POST",
        dataType: "json",
        data: {
          memNo: $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]
        },
        success: function (letRowOther) {
          console.log(letRowOther);
          let otherLet = "";
          // let letTit = "";
          let fullOtherLet = new Array();
          for (i = 0; i < letRowOther.length; i++) {
            otherLet = otherLetter(
              i,
              otherLet,
              letRowOther[i].letTitle,
              letRowOther[i].letTime,
              letRowOther[i].letNo
            ); //撈取撈過的歷史信件
            fullOtherLet.push([
              letRowOther[i].imgUrl,
              letRowOther[i].letTitle,
              letRowOther[i].letContent,
              letRowOther[i].letTime,
              letRowOther[i].authorNo,
              letRowOther[i].letNo,
            ]); //單一信件所需內容
            // console.log(fullLet);
            console.log(fullOtherLet);
            $(".cav-histLetter2").html(otherLet);
          }

          /* 點擊撈的歷史信件秀出對應信件標題、內文、圖片 */
          function letterContent(fullOtherLet) {
            let firstLook = $(".cav-looking").find(".cav-letTitle").text();
            // console.log(firstLook);
            for (let i = 0; i < fullOtherLet.length; i++) {
              if (firstLook == fullOtherLet[i][1]) {
                $(".letter-img").css("backgroundImage", "url(" + fullOtherLet[i][0] + ")");
                $(".letter-tittle").children("h5").text(fullOtherLet[i][1]);
                $(".text").children("p").text(fullOtherLet[i][2]);
                $(".letter-time").text(fullOtherLet[i][3]);
                $(".letter-author").text("no." + fullOtherLet[i][4]);
                $(".letChat").attr("data-letChat", fullOtherLet[i][4]);
                $(".letChat").attr("disabled", false);
                $(".letLike").attr("data-letLike", fullOtherLet[i][5]);
                $(".letReport").attr("data-letReport", fullOtherLet[i][5]);
                $(".letChat").attr("id", "letChat" + "-" + fullOtherLet[i][5]);
                $(".letLike").attr("id", "letLike" + fullOtherLet[i][5]);
                $(".letReport").attr("id", "letReport" + fullOtherLet[i][5]);
                // $(".cav-letNo").text("no." + fullOtherLet[i][3]);
                // console.log(fullOtherLet[i][4]);
                break;
              }
            }
            $(".cav-letters").on("click", function () {
              letTit = $(this).find(".cav-letTitle").text();
              // console.log(letTit);
              // console.log(fullOtherLet)
              for (let i = 0; i < fullOtherLet.length; i++) {
                if (letTit == fullOtherLet[i][1]) {
                  $(".letter-img").css("backgroundImage", "url(" + fullOtherLet[i][0] + ")");
                  $(".letter-tittle").children("h5").text(fullOtherLet[i][1]);
                  $(".text").children("p").text(fullOtherLet[i][2]);
                  $(".letter-time").text(fullOtherLet[i][3]);
                  $(".letter-author").text("no." + fullOtherLet[i][4]);
                  $(".letChat").attr("data-letChat", fullOtherLet[i][4]);
                  $(".letChat").attr("disabled", false);
                  $(".letLike").attr("data-letLike", fullOtherLet[i][5]);
                  $(".letReport").attr("data-letReport", fullOtherLet[i][5]);
                  $(".letChat").attr("id", "letChat" + "-" + fullOtherLet[i][5]);
                  $(".letLike").attr("id", "letLike" + fullOtherLet[i][5]);
                  $(".letReport").attr("id", "letReport" + fullOtherLet[i][5]);
                  console.log(fullOtherLet[i][1]);
                  break;
                }
              }
            });
          }
          letterContent(fullOtherLet);

          /*自動撈取第一封信件回覆 */
          $(function changeFirstMsg() {
            let firstLookMsg = $(".cav-looking").find(".cav-letTitle").attr("data-letter-num");
            $.ajax({
              url: "./phps/cav-letMessage.php",
              type: "GET",
              dataType: "json",
              data: { letNo: firstLookMsg },
              success: function (msgRow) {
                // console.log("信件回復", msgRow); 6
                // let letReply = "";
                // console.log(msgRow);
                // console.log($.isEmptyObject(msgRow) == false);
                if ($.isEmptyObject(msgRow) == false) {
                  $(function checkClickedBefore() {
                    let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];

                    // let mesgNo = msgRow[i].msgNo;
                    // console.log(msgRow[j].msgNo);
                    // console.log(memNo); 6
                    $.ajax({
                      url: "./phps/cav-checkClickedBefore.php",
                      type: "GET",
                      dataType: "json",
                      data: { "memNo": memNo },
                      success: function (chkClickRow) {
                        console.log(chkClickRow);
                        let letReply = "";
                        let msgNum = new Array();

                        // console.log("會員編號", memNo); 6
                        // console.log("有打賞", chkClickRow); 6
                        // console.log("留言", msgRow); 6
                        // console.log("有打賞過留言編號", chkClickRow[0].msgNo); 6
                        // console.log("留言編號", msgRow[0].msgNo); 6


                        for (let j = 0; j < msgRow.length; j++) {
                          //撈出所有回覆
                          letReply = letterReply(
                            letReply,
                            msgRow[j].memNo,
                            msgRow[j].msgTime,
                            msgRow[j].msgContent,
                            msgRow[j].msgNo,
                          );
                          msgNum[j] = msgRow[j].msgNo;
                          $(".cav-replys").html(letReply);
                        }

                        // console.log(msgNum);
                        // console.log(chkClickRow);
                        for (i = 0; i < chkClickRow.length; i++) {
                          // console.log(chkClickRow[i].mlmsgNo);

                          if ($.inArray(chkClickRow[i].mlmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mlmemNo) {
                            // console.log(msgNum);
                            // console.log(chkClickRow[i].mlmsgNo);
                            // $("#" + chkClickRow[i].mlmsgNo).attr("disabled", true);
                            $("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true });
                            // console.log($("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true }));
                            // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                            // console.log($("#like"));
                            // console.log(chkClickRow[i].mlmsgNo);
                            // console.log($("#like" + chkClickRow[i].mlmsgNo));

                          }
                          else {
                            console.log("沒有被打賞過");

                          }
                        }
                        // console.log(chkClickRow);
                        for (i = 0; i < chkClickRow.length; i++) {
                          // console.log(chkClickRow[i].mrmsgNo);

                          if ($.inArray(chkClickRow[i].mrmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mrmemNo) {
                            // console.log(msgNum);
                            // console.log(chkClickRow[i].mrmsgNo);
                            // $("#" + chkClickRow[i].msgNo).attr("disabled", true);
                            $("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true });
                            // console.log($("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true }));
                            // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                          }
                          else {
                            console.log("沒有被檢舉過");
                          }
                        }

                      },
                      error: function (chkClickRow) {
                        console.log(chkClickRow);
                      },
                    });
                  });

                  /* AJAX *註冊* 打賞留言跳金幣,並只能打賞一次 */
                  $(document).on("click", ".like", function (e) {
                    e.stopPropagation;
                    e.stopImmediatePropagation;
                    // console.log(e.target.parentNode);
                    let obj = e.target.parentNode.dataset.like;
                    console.log(obj);
                    // let likeThis = $(this).attr("data-like");
                    let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
                    let now = new Date();
                    let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                      " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                    // console.log("被打賞留言編號:", likeThis);
                    console.log("被打賞留言編號:", obj);
                    console.log("打賞者", whoLike);
                    console.log("打賞時間", likeTime);
                    $.ajax({
                      url: "./phps/cav-msgLike.php",
                      type: "GET",
                      dataType: "json",
                      data: {
                        "likeThis": obj,
                        "whoLike": whoLike,
                        "likeTime": likeTime,
                      },
                      success: function (likeRow) {
                        console.log(likeRow);
                        if (likeRow.status == 'success') {
                          $("#like" + obj).attr("disabled", true);
                          // obj.disabled = true; //這邊要改為指定按鈕 現在只是數字
                          // console.log($("#like" + obj));
                          // console.log(obj);
                          // console.log(666);
                        } else {
                          console.log(111);
                        }
                      },
                      error: function (likeRow) {
                        console.log(likeRow);
                      }
                    });
                    $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
                    console.log("coin");
                    setTimeout(() => {
                      $(".cav-commId").removeClass("active");
                    }, 1000);
                    // $(this).attr("disabled", true);
                  });

                  /* AJAX *註冊* 檢舉留言跳窗 */
                  var reportThis;
                  $(document).on("click", ".report", function (e) {
                    obj1 = e.target.parentNode;
                    reportThis = $(this).on("click").attr("data-report");//被檢舉留言
                    $(".cav-reportList").toggle();
                  });
                  $(".closeTag").on("click", function () {
                    $(".cav-reportList").css("display", "none");
                  });
                  $(".cav-sendReport").on("click", function () {
                    if ($("#cav-reportSelector").val() == null) {
                      alert("請選擇原因");
                      console.log($("#cav-reportSelector").val());
                    } else {
                      $(".cav-reportList").toggle();
                      alert("檢舉已送出，我們將盡速審核");
                      let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
                      let now = new Date();//檢舉時間
                      let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                      let msgRepReason = $("#cav-reportSelector").val();//檢舉原因
                      console.log(reportThis);
                      console.log(whoReport);
                      console.log(reportTime);
                      console.log(msgRepReason);
                      $.ajax({
                        url: "./phps/cav-msgReport.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                          "whoReport": whoReport,
                          "reportThis": reportThis,
                          "reportTime": reportTime,
                          "msgRepReason": msgRepReason,
                        },
                        success: function (reportRow) {
                          console.log(reportRow);
                          if (reportRow.status == 'success') {
                            // obj1.disabled = true;
                            $("#report" + obj1).attr("disabled", true);
                            console.log(obj1);
                            // console.log(666);
                          } else {
                            console.log(111);
                          }
                        },
                        error: function (reportRow) {
                          console.log(reportRow);
                        }
                      });
                      // e.preventDefault();
                    }
                  });
                } else {
                  let letNoReply = "";
                  letNoReply = letterNoReply();
                  $(".cav-replys").html(letNoReply);
                }

              },
              error: function (msgRow) {
                console.log(msgRow);
              }
            });


          });

          /* 與寫信者聊天，建立聊天室 */
          let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
          // $(".active").find(".letChat").attr("letchat")
          let letNoChat = $(".letter-author").text().split(".")[1];
          // console.log(letNoChat);
          // console.log(memNo);
          // console.log(letNoChat != memNo);
          if (letNoChat != memNo) {
            $(document).on("click", ".letChat", function (e) {
              let objChat = e.target.parentNode;
              // console.log(objChat);
              let whoGotChat = e.target.parentNode.dataset.letchat;
              // console.log(whoGotChat);
              let chatBtnId = e.target.parentNode.id.toString().substring(8);
              // console.log(chatBtnId);
              let whoLaunchChat = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
              // let now = new Date();
              // let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
              //   " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
              // console.log("被邀請人:", whoGotChat);
              // console.log("邀請人:", whoLaunchChat);
              // console.log("打賞時間", likeTime);
              $.ajax({
                url: "./phps/cav-goChat.php",
                type: "GET",
                dataType: "json",
                data: {
                  "whoLaunchChat": whoLaunchChat,
                  "whoGotChat": whoGotChat,
                  // "likeTime": likeTime,
                },
                success: function (chatRow) {
                  console.log(chatRow);
                  if (chatRow.status == 'success') {
                    $("#letChat-" + chatBtnId).attr("disabled", true);
                    // console.log($("#letChat" + whoGotChat));
                    // console.log(whoGotChat);
                  } else {
                    console.log(elseChat);
                  }
                },
                error: function (chatRow) {
                  console.log(chatRow);
                }
              });
              // e.preventDefault();
            });
          } else {
            $("#letChat" + chatBtnId).attr("disabled", true);
            console.log($("#letChat" + chatBtnId));
          }
          /*---結束--- */
        },
        error: function (letRow) {
          console.log(letRow);
        }
      });
    });





    //打賞信件跳金幣,並只能打賞一次
    $(".letLike").on("click", function (e) {
      let obj = e.target.parentNode;
      let likeThis = $(this).attr("data-like");
      console.log(likeThis);
      let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
      // let now = new Date();
      // let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
      //   " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      console.log(likeThis);
      console.log(whoLike);
      // console.log(likeTime);
      $.ajax({
        url: "./phps/likeLetter.php",
        type: "POST",
        dataType: "json",
        data: {
          "letNo": likeThis,
          "memNo": whoLike,
          // "likeTime": likeTime,
        },
        success: function (likeRowLet) {
          console.log(likeRowLet);
          console.log(whoLike)
          // if (likeRowLet.status == 'success') {
          //   $("#letLike" + obj).attr("disabled", true);
          //   console.log(obj);
          //   // console.log(666);
          // } else {
          //   console.log(111);
          // }
        },
        error: function (likeRowLet) {
          console.log(likeRowLet);
        }
      });
      $(this).parents(".letter-contant").find(".letter-author").addClass("active");
      console.log("coin");
      setTimeout(() => {
        $(".letter-author").removeClass("active");
      }, 1000);
      // $(this).attr("disabled", true);
    });



    // //檢舉信件跳窗
    // var reportThis2;
    var objReport;
    $(document).on("click", ".letReport", function (e) {
      objReport = e.target.parentNode.dataset.letreport;
      // objReport = e.target.parentNode.dataset.letReport;
      console.log(objReport);
      $(".cav-reportListLet").toggle();
    });
    $(document).on("click", ".closeTagLet", function () {
      $(".cav-reportListLet").css("display", "none");
    });
    $(document).on("click", ".cav-sendReportLet", function (e) {
      if ($("#cav-reportSelectorLet").val() == null) {
        alert("請選擇原因");
      } else {
        $(".cav-reportListLet").toggle();
        alert("檢舉已送出，我們將盡速審核");
        let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
        let now = new Date();//檢舉時間
        let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
          " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let letRepReason = $("#cav-reportSelectorLet").val();//檢舉原因
        // console.log(objReport);
        // console.log(whoReport);
        // console.log(reportTime);
        // console.log(letRepReason);
        $.ajax({
          url: "./phps/cav-letReport.php",
          type: "GET",
          dataType: "json",
          data: {
            "whoReport": whoReport,
            "reportThis": objReport,
            "reportTime": reportTime,
            "letRepReason": letRepReason,
          },
          success: function (reportRowLet) {
            console.log(reportRowLet);
            if (reportRowLet.status == 'success') {
              $("#letReport" + objReport).attr("disabled", true);
              console.log(obj);
              // console.log(666);
            } else {
              console.log(111);
            }
          },
          error: function (reportRowLet) {
            console.log(reportRowLet);
          }
        });
      }
    });


    /*自動撈取第一封信件回覆 */
    $(function changeFirstMsg() {
      let firstLookMsg = $(".cav-looking").find(".cav-letTitle").attr("data-letter-num");
      $.ajax({
        url: "./phps/cav-letMessage.php",
        type: "GET",
        dataType: "json",
        data: { letNo: firstLookMsg },
        success: function (msgRow) {
          // console.log("信件回復", msgRow); 6
          // let letReply = "";
          // console.log(msgRow);
          // console.log($.isEmptyObject(msgRow) == false);
          if ($.isEmptyObject(msgRow) == false) {
            $(function checkClickedBefore() {
              let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];

              // let mesgNo = msgRow[i].msgNo;
              // console.log(msgRow[j].msgNo);
              // console.log(memNo); 6
              $.ajax({
                url: "./phps/cav-checkClickedBefore.php",
                type: "GET",
                dataType: "json",
                data: { "memNo": memNo },
                success: function (chkClickRow) {
                  console.log(chkClickRow);
                  let letReply = "";
                  let msgNum = new Array();

                  // console.log("會員編號", memNo); 6
                  // console.log("有打賞", chkClickRow); 6
                  // console.log("留言", msgRow); 6
                  // console.log("有打賞過留言編號", chkClickRow[0].msgNo); 6
                  // console.log("留言編號", msgRow[0].msgNo); 6


                  for (let j = 0; j < msgRow.length; j++) {
                    //撈出所有回覆
                    letReply = letterReply(
                      letReply,
                      msgRow[j].memNo,
                      msgRow[j].msgTime,
                      msgRow[j].msgContent,
                      msgRow[j].msgNo,
                    );
                    msgNum[j] = msgRow[j].msgNo;
                    $(".cav-replys").html(letReply);
                  }

                  // console.log(msgNum);
                  // console.log(chkClickRow);
                  for (i = 0; i < chkClickRow.length; i++) {
                    // console.log(chkClickRow[i].mlmsgNo);

                    if ($.inArray(chkClickRow[i].mlmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mlmemNo) {
                      // console.log(msgNum);
                      // console.log(chkClickRow[i].mlmsgNo);
                      // $("#" + chkClickRow[i].mlmsgNo).attr("disabled", true);
                      $("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true });
                      // console.log($("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true }));
                      // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                      // console.log($("#like"));
                      // console.log(chkClickRow[i].mlmsgNo);
                      // console.log($("#like" + chkClickRow[i].mlmsgNo));

                    }
                    else {
                      console.log("沒有被打賞過");

                    }
                  }
                  // console.log(chkClickRow);
                  for (i = 0; i < chkClickRow.length; i++) {
                    // console.log(chkClickRow[i].mrmsgNo);

                    if ($.inArray(chkClickRow[i].mrmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mrmemNo) {
                      // console.log(msgNum);
                      // console.log(chkClickRow[i].mrmsgNo);
                      // $("#" + chkClickRow[i].msgNo).attr("disabled", true);
                      $("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true });
                      // console.log($("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true }));
                      // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                    }
                    else {
                      console.log("沒有被檢舉過");
                    }
                  }

                },
                error: function (chkClickRow) {
                  console.log(chkClickRow);
                },
              });
            });

            /* AJAX *註冊* 打賞留言跳金幣,並只能打賞一次 */
            $(document).on("click", ".like", function (e) {
              e.stopPropagation;
              e.stopImmediatePropagation;
              // console.log(e.target.parentNode);
              let obj = e.target.parentNode.dataset.like;
              console.log(obj);
              // let likeThis = $(this).attr("data-like");
              let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
              let now = new Date();
              let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
              // console.log("被打賞留言編號:", likeThis);
              // console.log("被打賞留言編號:", obj);
              // console.log("打賞者", whoLike);
              // console.log("打賞時間", likeTime);
              $.ajax({
                url: "./phps/cav-msgLike.php",
                type: "GET",
                dataType: "json",
                data: {
                  "likeThis": obj,
                  "whoLike": whoLike,
                  "likeTime": likeTime,
                },
                success: function (likeRow) {
                  console.log(likeRow);
                  if (likeRow.status == 'success') {
                    $("#like" + obj).attr("disabled", true);
                    // obj.disabled = true; //這邊要改為指定按鈕 現在只是數字
                    // console.log($("#like" + obj));
                    // console.log(obj);
                    // console.log(666);
                  } else {
                    console.log(111);
                  }
                },
                error: function (likeRow) {
                  console.log(likeRow);
                }
              });
              $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
              console.log("coin");
              setTimeout(() => {
                $(".cav-commId").removeClass("active");
              }, 1000);
              // $(this).attr("disabled", true);
            });

            /* AJAX *註冊* 檢舉留言跳窗 */
            var reportThis;
            $(document).on("click", ".report", function (e) {
              obj1 = e.target.parentNode;
              reportThis = $(this).on("click").attr("data-report");//被檢舉留言
              $(".cav-reportList").toggle();
            });
            $(".closeTag").on("click", function () {
              $(".cav-reportList").css("display", "none");
            });
            $(".cav-sendReport").on("click", function () {
              if ($("#cav-reportSelector").val() == null) {
                alert("請選擇原因");
                // console.log($("#cav-reportSelector").val());
              } else {
                $(".cav-reportList").toggle();
                alert("檢舉已送出，我們將盡速審核");
                let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
                let now = new Date();//檢舉時間
                let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                  " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                let msgRepReason = $("#cav-reportSelector").val();//檢舉原因
                // console.log(reportThis);
                // console.log(whoReport);
                // console.log(reportTime);
                // console.log(msgRepReason);
                $.ajax({
                  url: "./phps/cav-msgReport.php",
                  type: "GET",
                  dataType: "json",
                  data: {
                    "whoReport": whoReport,
                    "reportThis": reportThis,
                    "reportTime": reportTime,
                    "msgRepReason": msgRepReason,
                  },
                  success: function (reportRow) {
                    console.log(reportRow);
                    if (reportRow.status == 'success') {
                      // obj1.disabled = true;
                      $("#report" + obj1).attr("disabled", true);
                      console.log(obj1);
                      // console.log(666);
                    } else {
                      console.log(111);
                    }
                  },
                  error: function (reportRow) {
                    console.log(reportRow);
                  }
                });
                // e.preventDefault();
              }
            });
          } else {
            let letNoReply = "";
            letNoReply = letterNoReply();
            $(".cav-replys").html(letNoReply);
          }

        },
        error: function (msgRow) {
          console.log(msgRow);
        }
      });


    });


    /* 點擊不同信件更換顯示信件回復 */
    $(document).on("click", ".cav-letters", function () {
      let witchLetMsg = $(this).find(".cav-letTitle").attr("data-letter-num");
      // console.log(witchLetMsg); 6
      $.ajax({
        url: "./phps/cav-letMessage.php",
        type: "GET",
        dataType: "json",
        data: { letNo: witchLetMsg },
        success: function (msgRow) {
          // console.log("信件回復", msgRow); 6
          // let letReply = "";
          // console.log(msgRow);
          // console.log($.isEmptyObject(msgRow) == false);
          if ($.isEmptyObject(msgRow) == false) {
            $(function checkClickedBefore() {
              let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];

              // let mesgNo = msgRow[i].msgNo;
              // console.log(msgRow[j].msgNo);
              // console.log(memNo); 6
              $.ajax({
                url: "./phps/cav-checkClickedBefore.php",
                type: "GET",
                dataType: "json",
                data: { "memNo": memNo },
                success: function (chkClickRow) {
                  console.log(chkClickRow);
                  let letReply = "";
                  let msgNum = new Array();

                  // console.log("會員編號", memNo); 6
                  // console.log("有打賞", chkClickRow); 6
                  // console.log("留言", msgRow); 6
                  // console.log("有打賞過留言編號", chkClickRow[0].msgNo); 6
                  // console.log("留言編號", msgRow[0].msgNo); 6


                  for (let j = 0; j < msgRow.length; j++) {
                    //撈出所有回覆
                    letReply = letterReply(
                      letReply,
                      msgRow[j].memNo,
                      msgRow[j].msgTime,
                      msgRow[j].msgContent,
                      msgRow[j].msgNo,
                    );
                    msgNum[j] = msgRow[j].msgNo;
                    $(".cav-replys").html(letReply);
                  }

                  // console.log(msgNum);
                  // console.log(chkClickRow);
                  for (i = 0; i < chkClickRow.length; i++) {
                    // console.log(chkClickRow[i].mlmsgNo);

                    if ($.inArray(chkClickRow[i].mlmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mlmemNo) {
                      $("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true });
                    }
                    else {
                      console.log("沒有被打賞過");

                    }
                  }
                  // console.log(chkClickRow);
                  for (i = 0; i < chkClickRow.length; i++) {
                    // console.log(chkClickRow[i].mrmsgNo);

                    if ($.inArray(chkClickRow[i].mrmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mrmemNo) {
                      // console.log(msgNum);
                      // console.log(chkClickRow[i].mrmsgNo);
                      // $("#" + chkClickRow[i].msgNo).attr("disabled", true);
                      $("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true });
                      // console.log($("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true }));
                      // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                    }
                    else {
                      console.log("沒有被檢舉過");
                    }
                  }

                },
                error: function (chkClickRow) {
                  console.log(chkClickRow);
                },
              });
            });

            /* AJAX 打賞留言跳金幣,並只能打賞一次 */
            $(".like").click(function (e) {
              // $(document).on("click", ".like", function (e) {
              // console.log(e.target.parentNode);
              let obj = e.target.parentNode.dataset.like;
              // console.log(obj);
              // let likeThis = $(this).attr("data-like");
              let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
              let now = new Date();
              let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
              // console.log("被打賞留言編號:", likeThis);
              // console.log("被打賞留言編號:", obj);
              // console.log("打賞者", whoLike);
              // console.log("打賞時間", likeTime);
              $.ajax({
                url: "./phps/cav-msgLike.php",
                type: "GET",
                dataType: "json",
                data: {
                  "likeThis": obj,
                  "whoLike": whoLike,
                  "likeTime": likeTime,
                },
                success: function (likeRow) {
                  console.log(likeRow);
                  if (likeRow.status == 'success') {
                    $("#like" + obj).attr("disabled", true);
                    // obj.disabled = true; //這邊要改為指定按鈕 現在只是數字

                    console.log(obj);
                    // console.log(666);
                  } else {
                    console.log(111);
                  }
                },
                error: function (likeRow) {
                  console.log(likeRow);
                }
              });
              $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
              console.log("coin");
              setTimeout(() => {
                $(".cav-commId").removeClass("active");
              }, 1000);
              // $(this).attr("disabled", true);
            });

            /* 檢舉留言跳窗 */
            var reportThis;
            $(".report").click(function (e) {
              obj1 = e.target.parentNode;
              reportThis = $(this).on("click").attr("data-report");//被檢舉留言
              $(".cav-reportList").toggle();
            });
            $(".closeTag").click(function () {
              // $(document).on("click", ".closeTag", function () {
              $(".cav-reportList").css("display", "none");
            });
            $(".cav-sendReport").click(function () {
              // $(document).on("click", ".cav-sendReport", function (e) {
              if ($("#cav-reportSelector").val() == null) {
                // e.stopPropagation;
                alert("請選擇原因");
                console.log($("#cav-reportSelector").val());
                // e.preventDefault();
              } else {
                // e.stopPropagation;
                $(".cav-reportList").toggle();
                alert("檢舉已送出，我們將盡速審核");
                let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
                let now = new Date();//檢舉時間
                let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
                  " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                let msgRepReason = $("#cav-reportSelector").val();//檢舉原因
                console.log(reportThis);
                console.log(whoReport);
                console.log(reportTime);
                console.log(msgRepReason);
                $.ajax({
                  url: "./phps/cav-msgReport.php",
                  type: "GET",
                  dataType: "json",
                  data: {
                    "whoReport": whoReport,
                    "reportThis": reportThis,
                    "reportTime": reportTime,
                    "msgRepReason": msgRepReason,
                  },
                  success: function (reportRow) {
                    console.log(reportRow);
                    if (reportRow.status == 'success') {
                      // obj1.disabled = true;
                      $("#report" + obj1).attr("disabled", true);
                      console.log(obj1);
                      // console.log(666);
                    } else {
                      console.log(111);
                    }
                  },
                  error: function (reportRow) {
                    console.log(reportRow);
                  }
                });
                // e.preventDefault();
              }
            });
          } else {
            let letNoReply = "";
            letNoReply = letterNoReply();
            $(".cav-replys").html(letNoReply);
          }

        },
        error: function (msgRow) {
          console.log(msgRow);
        }
      });
    });


    /* 聊天按鈕disabled */
    // $(function checkChat() {
    //   let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
    //   console.log(chat77);
    //   $.ajax({
    //     url: "./phps/cav-checkChat.php",
    //     type: "GET",
    //     dataType: "json",
    //     data: { "memNo": memNo },
    //     success: function (chkChatRow) {
    //       console.log(chkChatRow);
    //       let letReply = "";
    //       let msgNum = new Array();

    //       // console.log("會員編號", memNo); 6
    //       // console.log("有打賞", chkChatRow); 6
    //       // console.log("留言", msgRow); 6
    //       // console.log("有打賞過留言編號", chkChatRow[0].msgNo); 6
    //       // console.log("留言編號", msgRow[0].msgNo); 6
    //       for (let i = 0; i < msgRow.length; i++) {
    //         //撈出所有回覆
    //         letReply = letterReply(
    //           letReply,
    //           msgRow[i].memNo,
    //           msgRow[i].msgTime,
    //           msgRow[i].msgContent,
    //           msgRow[i].msgNo,
    //         );
    //         msgNum[i] = msgRow[i].msgNo;
    //         $(".cav-replys").html(letReply);
    //       }

    //       // console.log(msgNum);
    //       // console.log(chkChatRow);
    //       for (i = 0; i < chkChatRow.length; i++) {
    //         // console.log(chkChatRow[i].mlmsgNo);

    //         if ($.inArray(chkChatRow[i].mlmsgNo, msgNum) != -1 && memNo == chkChatRow[i].mlmemNo) {
    //           // console.log(msgNum);
    //           // console.log(chkChatRow[i].mlmsgNo);
    //           // $("#" + chkChatRow[i].mlmsgNo).attr("disabled", true);
    //           $("#like" + chkChatRow[i].mlmsgNo).attr({ "data-like": chkChatRow[i].mlmsgNo, "disabled": true });
    //           // console.log($("#like" + chkChatRow[i].mlmsgNo).attr({ "data-like": chkChatRow[i].mlmsgNo, "disabled": true }));
    //           // console.log($("#" + chkChatRow[i].msgNo).attr("disabled"));
    //         }
    //         else {
    //           console.log("沒有被打賞過");
    //         }
    //       }
    //     },
    //     error: function (chkChatRow) {
    //       console.log(chkChatRow);
    //     },
    //   });
    // });

  }

  function cavJs() {
    //bookMarkL
    // $(function () {
    $("a.tab1").on("click", function (e) {
      e.preventDefault();

      $(this).closest("ul").find("a.tab1").removeClass("-on");
      $(this).addClass("-on");

      $("div.tab1").removeClass("-on");
      $("div.tab1." + $(this).attr("data-target")).addClass("-on");

      $(".cav-preview-plan").removeClass("-on");
      $(".cav-preview-plan." + $(this).attr("data-target")).addClass("-on");

      $(".cav-botBlock").removeClass("-on");
      $(".cav-botBlock." + $(this).attr("data-target")).addClass("-on");

    });
    // });


    //bookMarkR
    $("a.tab2").on("click", function (e) {
      e.preventDefault();

      $(this).closest("ul").find("a.tab2").removeClass("-on");
      $(this).addClass("-on");

      $("div.tab2").removeClass("-on");
      $("div.tab2." + $(this).attr("data-target")).addClass("-on");
    });

    //信件分類按鈕
    $("div.btn").on("click", function (e) {
      $("div.btn").removeClass("click");
      $(this).addClass("click");
    });

    //顯示正在看的歷史信件 動態綁定功能
    $(document).on("click", ".cav-letters", function () {
      $(".cav-letters").removeClass("cav-looking");
      $(this).addClass("cav-looking");
    });


    //更換按鈕
    $(".switchBtn").mousedown(function () {
      $(this).addClass("clicked");
    });
    $(".switchBtn").mouseup(function () {
      $(this).removeClass("clicked");
    });

    $(".orderBtn").mousedown(function () {
      $(this).addClass("clicked");
    });
    $(".orderBtn").mouseup(function () {
      $(this).removeClass("clicked");
    });

    //單一信件跳窗 動態綁定功能
    $(document).on("click", ".cav-letters", function (e) {
      $(".cav-boxFrontRight").addClass("active");
    });
    $(document).on("click", ".cav-letClose", function (e) {
      $(".cav-boxFrontRight").removeClass("active");
    });


    //選取所要套用的圖案
    $(function () {
      $("div.cav-prodI").on("click", function () {
        $("div.cav-prodI").removeClass("wearing");
        $(this).addClass("wearing");
      });
    });

    //選取所要套用的郵戳
    $(function () {
      $("div.cav-prodU").on("click", function () {
        $("div.cav-prodU").removeClass("wearing");
        $(this).addClass("wearing");
      });
    });

    //預覽要套用的圖案
    $(function () {
      $(".cav-prodI")
        .find("img")
        .on("click", function () {
          let ii = $(this).attr("src");
          // console.log(ii);
          $(".cav-mask-1").css("background-image", `url(${ii})`);
        });
    });

    //預覽要套用的郵戳
    $(function () {
      $(".cav-prodU")
        .find("img")
        .on("click", function () {
          let uu = $(this).attr("src");
          // console.log(uu);
          $(".cav-mask-2").css("background-image", `url(${uu})`);
        });
    });
  }
  window.addEventListener("load", function () {
    setTimeout(cavAjax, 100);
  });

  window.addEventListener("load", function () {
    setTimeout(cavJs, 200);
  });


});


/* ------------------------------------------------------------------- */


/* 動態產生我的歷史信件 */
function myLetter(i, myLet, letTitle, letTime, letNo) {

  myLet += `
      <div class="cav-letters ${i === 0 ? 'cav-looking' : ''}">
      <div class="cav-letWord">
        <div>
          <p class="cav-letTitle" data-letter-num="${letNo}">${letTitle}</p> 
         </div>
         <div>
            <h6 class="cav-letTime">${letTime}</h6>
       </div>
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
       `;
  return myLet;
}
/* 動態產生撈的歷史信件 */
function otherLetter(i, otherLet, letTitle, letTime, letNo) {
  otherLet += `
      <div class="cav-letters ${i === 0 ? "cav-looking" : ""}">
      <div class="cav-letWord">
        <div>
          <p class="cav-letTitle" data-letter-num="${letNo}">${letTitle}</p> 
         </div>
         <div>
            <h6 class="cav-letTime">${letTime}</h6>
       </div>
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
       `;
  return otherLet;
}

/* 動態產生回復留言 */
function letterReply(letReply, memNo, msgTime, msgContent, msgNo) {
  letReply += `<div class="cav-letComment">
  <div class="cav-commMain">
      <div class="cav-commHead">
          <div class="cav-commId">${memNo}</div>
          <div class="cav-commTime">${msgTime}</div>
      </div>
      <p class="cav-commText">${msgContent}</p>
  </div>
  <div class="cav-commOption">
      <div class="cav-commLike">
          <div class="circle threed">
              <button id="like${msgNo}" class="circle button like" data-like="${msgNo}">
                  <img src="./img/cave/coin.png" alt=""></i></button>
          </div>
      </div>
      <div class="cav-commReport">
          <div class="circle threed ">
              <button id="report${msgNo}" class="circle button report" data-report="${msgNo}">
                  <img src="./img/cave/exclamation-button.png"
                      alt=""></button>
          </div>
      </div>
  </div>
</div>
`;
  return letReply;
}

function letterNoReply(letNoReply) {
  letNoReply += `<div class="cav-letComment">
  <div class="cav-commMain">
      <div class="cav-commHead">
          <div class="cav-commId"></div>
          <div class="cav-commTime"></div>
      </div>
      <p class="cav-commText">尚未收到任何回覆</p>
  </div>
  <div class="cav-commOption" disabled="disabled">
      <div class="cav-commLike">
          <div class="circle threed">
              <button id="like" class="circle button like" data-like="">
                  <img src="./img/cave/coin.png" alt=""></i></button>
          </div>
      </div>
      <div class="cav-commReport">
          <div class="circle threed ">
              <button id="report" class="circle button report" data-report="">
                  <img src="./img/cave/exclamation-button.png"
                      alt=""></button>
          </div>
      </div>
  </div>
</div>
`;
  return letNoReply;
}

function cavePosChange(json) {////////////////////////更換預設郵戳
  let cavedata = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = cavedata.memNo;
  let matPosNo = document.getElementsByClassName('cav-prod cav-prodU wearing')[0].dataset.pos;
  // console.log("memNo", memNo);
  // console.log("matPosNo", matPosNo);
  // console.log("OldmatPosNo---", cavedata.matPosUrl);
  xhr.onload = function () {
    let posdata = JSON.parse(xhr.responseText);
    if (posdata.matPosUrl) {
      // console.log("NewmatPosNo---", posdata.matPosUrl);
      document.getElementById('previewPos').style.backgroundImage = `url("${posdata.matPosUrl}")`;
      alert('預設郵戳更換成功');
    }
  }
  xhr.open("post", "phps/cave_posChange.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_poschange = `memNo=${memNo}&matPosNo=${matPosNo}`;
  xhr.send(data_poschange);
}

function cavePatChange(json) {////////////////////////更換預設圖案
  let cavedata = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = cavedata.memNo;
  let matPatNo = document.getElementsByClassName('cav-prod cav-prodI wearing')[0].dataset.pat;
  // console.log("memNo", memNo);
  // console.log("matPatNo", matPatNo);
  // console.log("OldmatPatNo---", cavedata.matPatUrl);
  xhr.onload = function () {
    let patdata = JSON.parse(xhr.responseText);
    if (patdata.matPatUrl) {
      // console.log("NewmatPatNo---", patdata.matPatUrl);
      document.getElementById('previewPat').style.backgroundImage = `url("${patdata.matPatUrl}")`;
      alert('預設圖案更換成功');
    }
  }
  xhr.open("post", "phps/cave_patChange.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_patchange = `memNo=${memNo}&matPatNo=${matPatNo}`;
  xhr.send(data_patchange);
}



////////////////////////動態生成圖案/郵戳/素材/工具
function showCaveData(json) {////////////////////////信紙,Air幣資訊
  let memdata = JSON.parse(json);
  document.getElementById('cavPaper').innerText = "信紙:" + memdata.letCount;
  document.getElementById('cavCoin').innerText = "Air幣:" + memdata.airCoin;
  document.getElementById('previewPat').style.backgroundImage = `url("${memdata.matPatUrl}")`;
  document.getElementById('previewPos').style.backgroundImage = `url("${memdata.matPosUrl}")`;
}

const matadd = `<div class="cav-addProd"><a href="./shop.html"><img src="./img/cave/add.svg"></a></div>`;

function getMatPostMark(json) {////////////////////////郵戳資料撈取
  let loginData = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = loginData.memNo;
  xhr.onload = function () {
    let postMarkRow = JSON.parse(xhr.responseText);
    let postMark = "";
    for (i = 0; i < postMarkRow.length; i++) {
      postMark = patternWrap(
        postMark,
        postMarkRow[i].matPosUrl,
        postMarkRow[i].matPosName,
        postMarkRow[i].matPosNo,
      );
    }
    $("#cavPosWrap").html(postMark);
    $("#cavPosWrap").append(matadd);
  }
  xhr.open("post", "phps/cave_getPostMark.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_pattern = `memNo=${memNo}`;
  xhr.send(data_pattern);
}
function patternWrap(postMark, matPosUrl, matPosName, matPosNo) {
  postMark += `
    <div id="cavPosItem${matPosNo}" data-pos="${matPosNo}" class="cav-prod cav-prodU">
      <img src="${matPosUrl}"></img>
    </div>
  `;
  return postMark;
}

function getMatPattern(json) {////////////////////////圖案資料撈取
  let loginData = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = loginData.memNo;
  xhr.onload = function () {
    let patternRow = JSON.parse(xhr.responseText);
    let pattern = "";
    for (i = 0; i < patternRow.length; i++) {
      pattern = patternWrap(
        pattern,
        patternRow[i].matPatUrl,
        patternRow[i].matPatName,
        patternRow[i].matPatNo,
      );
    }
    $("#cavPatWrap").html(pattern);
    $("#cavPatWrap").append(matadd);
    function patternWrap(pattern, matPatUrl, matPatName, matPatNo) {
      pattern += `
        <div id="cavPatItem${matPatNo}" data-pat="${matPatNo}" class="cav-prod cav-prodI">
          <img src="${matPatUrl}"></img>
        </div>
      `;
      return pattern;
    }
  }
  xhr.open("post", "phps/cave_getPattern.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_pattern = `memNo=${memNo}`;
  xhr.send(data_pattern);
}

function getMaterial(json) {////////////////////////素材資料撈取
  let loginData = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = loginData.memNo;
  xhr.onload = function () {
    let materialRow = JSON.parse(xhr.responseText);
    let material = "";
    for (i = 0; i < materialRow.length; i++) {
      material = materialWrap(
        material,
        materialRow[i].matURL,
        materialRow[i].matName,
        materialRow[i].matNo,
      );
    }
    $("#cavMatWrap").html(material);
    $("#cavMatWrap").append(matadd);
    function materialWrap(material, matURL, matName, matNo) {
      material += `
        <div id="cavMatItem${matNo}" value="${matNo}" class="cav-prod">
          <img src="${matURL}"></img>
        </div>
      `;
      return material;
    }
  }
  xhr.open("post", "phps/cave_getMaterial.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_matTool = `memNo=${memNo}`;
  xhr.send(data_matTool);
}

function getTool(json) {////////////////////////工具資料撈取
  let loginData = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = loginData.memNo;
  xhr.onload = function () {
    let matToolRow = JSON.parse(xhr.responseText);
    let matTool = "";
    for (i = 0; i < matToolRow.length; i++) {
      matTool = matToolWrap(
        matTool,
        matToolRow[i].matURL,
        matToolRow[i].matName,
        matToolRow[i].matNo,
      );
    }
    $("#cavToolWrap").html(matTool);
    $("#cavToolWrap").append(matadd);
    function matToolWrap(matTool, matURL, matName, matNo) {
      matTool += `
        <div id="cavToolItem${matNo}" value="${matNo}" class="cav-prod">
          <img src="${matURL}"></img>
        </div>
      `;
      return matTool;
    }
  }
  xhr.open("post", "phps/cave_getMatTool.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_Material = `memNo=${memNo}`;
  xhr.send(data_Material);
}

function getCaveInfo() {////////////////////////取得session資料
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    let member = JSON.parse(xhr.responseText);
    if (member.memNo) {
      showCaveData(xhr.responseText);//show aircoin letcount
      getMatPostMark(xhr.responseText);//郵戳資料撈取
      getMatPattern(xhr.responseText);//圖案撈取
      getMaterial(xhr.responseText);//素材撈取
      getTool(xhr.responseText);//工具撈取
      let cavePosChangeBtn = document.querySelector('.posChange');
      let cavePatChangeBtn = document.querySelector('.patChange');
      cavePosChangeBtn.onclick = function () {
        cavePosChange(xhr.responseText);//預設郵戳更換紐
      };
      cavePatChangeBtn.onclick = function () {
        cavePatChange(xhr.responseText);//預設圖案更換紐
      };
    }
  }
  xhr.open("get", "./phps/nav_getSignInInfo.php", true);
  xhr.send(null);
}

window.addEventListener("load", function () {
  getCaveInfo();
});

