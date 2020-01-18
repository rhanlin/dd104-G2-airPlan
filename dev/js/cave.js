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
              $(".letLike").attr("data-like", fullLet[i][5]);
              $(".letReport").attr("data-report", fullLet[i][5]);
              // $(".cav-letNo").text("no." + fullLet[i][3]);
              console.log(fullLet[i][1]);
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
                $(".letLike").attr("data-like", fullLet[i][5]);
                $(".letReport").attr("data-report", fullLet[i][5]);
                // $(".cav-letNo").text("no." + fullLet[i][3]);
                console.log(fullLet[i][1]);
                break;
              }
            }
          });
        }
        letterContent(fullLet);
        /*---結束--- */
      },
      error: function (letRow) {
        console.log(letRow);
      }
    });


    /* 點擊觸發mine 顯示我的歷史信件*/
    $(".cav-myLetter").on("click", function mine() {
      console.log("我的");
      $.ajax({
        url: "./phps/cav-whosLetter.php",
        type: "POST",
        dataType: "json",
        data: {
          memNo: $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1]
        },

        success: function (letRow) {
          console.log(letRow);
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
                $(".letLike").attr("data-like", fullLet[i][5]);
                $(".letReport").attr("data-report", fullLet[i][5]);
                // $(".cav-letNo").text("no." + fullLet[i][3]);
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
                  $(".letLike").attr("data-like", fullLet[i][5]);
                  $(".letReport").attr("data-report", fullLet[i][5]);
                  // $(".cav-letNo").text("no." + fullLet[i][3]);
                  console.log(fullLet[i][1]);
                  break;
                }
              }
            });
          }
          letterContent(fullLet);
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
              letRowOther[i].memNo,
              letRowOther[i].letNo,
            ]); //單一信件所需內容
            // console.log(fullLet);

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
                $(".letLike").attr("data-like", fullOtherLet[i][5]);
                $(".letReport").attr("data-report", fullOtherLet[i][5]);
                // $(".cav-letNo").text("no." + fullOtherLet[i][3]);
                console.log(fullOtherLet[i][1]);
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
                  $(".letLike").attr("data-like", fullOtherLet[i][5]);
                  $(".letReport").attr("data-report", fullOtherLet[i][5]);
                  // $(".cav-letNo").text("no." + fullOtherLet[i][3]);
                  console.log(fullOtherLet[i][1]);
                  break;
                }
              }
            });
          }
          letterContent(fullOtherLet);
          /*---結束--- */

        },
        error: function (letRow) {
          console.log(letRow);
        }
      });
    });


    /*AJAX 撈取信件回覆 */
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

          //---------------!

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

                console.log(msgNum);
                for (i = 0; i < chkClickRow.length; i++) {
                  console.log(chkClickRow[i].mlmsgNo);

                  if ($.inArray(chkClickRow[i].mlmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mlmemNo) {
                    console.log(msgNum);
                    console.log(chkClickRow[i].mlmsgNo);
                    // $("#" + chkClickRow[i].mlmsgNo).attr("disabled", true);
                    $("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true });
                    console.log($("#like" + chkClickRow[i].mlmsgNo).attr({ "data-like": chkClickRow[i].mlmsgNo, "disabled": true }));
                    // console.log($("#" + chkClickRow[i].msgNo).attr("disabled"));
                  }
                  else {
                    console.log("沒有被打賞過");

                  }
                }
                console.log(chkClickRow);
                for (i = 0; i < chkClickRow.length; i++) {
                  console.log(chkClickRow[i].mrmsgNo);

                  if ($.inArray(chkClickRow[i].mrmsgNo, msgNum) != -1 && memNo == chkClickRow[i].mrmemNo) {
                    console.log(msgNum);
                    console.log(chkClickRow[i].mrmsgNo);
                    // $("#" + chkClickRow[i].msgNo).attr("disabled", true);
                    $("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true });
                    console.log($("#report" + chkClickRow[i].mrmsgNo).attr({ "data-report": chkClickRow[i].mrmsgNo, "disabled": true }));
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
          //---------------!


          /* 檢查是否已打賞 */
          // $(function checkLike() {
          //   let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
          //   // let mesgNo = msgRow[i].msgNo;
          //   // console.log(msgRow[j].msgNo);
          //   // console.log(memNo); 6
          //   $.ajax({
          //     url: "./phps/cav-checkLike.php",
          //     type: "GET",
          //     dataType: "json",
          //     data: { "memNo": memNo },
          //     success: function (chkLikeRow) {
          //       console.log(chkLikeRow);
          //       let letReply = "";
          //       let msgNum = new Array();

          //       // console.log("會員編號", memNo); 6
          //       // console.log("有打賞", chkLikeRow); 6
          //       // console.log("留言", msgRow); 6
          //       // console.log("有打賞過留言編號", chkLikeRow[0].msgNo); 6
          //       // console.log("留言編號", msgRow[0].msgNo); 6


          //       for (let j = 0; j < msgRow.length; j++) {
          //         //撈出所有回覆
          //         letReply = letterReply(
          //           letReply,
          //           msgRow[j].memNo,
          //           msgRow[j].msgTime,
          //           msgRow[j].msgContent,
          //           msgRow[j].msgNo,
          //         );
          //         msgNum[j] = msgRow[j].msgNo;
          //         $(".cav-replys").html(letReply);
          //       }

          //       console.log(msgNum);
          //       for (i = 0; i < chkLikeRow.length; i++) {
          //         if ($.inArray(chkLikeRow[i].msgNo, msgNum) != -1 && memNo == chkLikeRow[i].memNo) {
          //           console.log(msgNum);
          //           console.log(chkLikeRow[i].msgNo);
          //           // $("#" + chkLikeRow[i].msgNo).attr("disabled", true);
          //           $("#like" + chkLikeRow[i].msgNo).attr({ "data-like": chkLikeRow[i].msgNo, "disabled": true });
          //           console.log($("#like" + chkLikeRow[i].msgNo).attr({ "data-like": chkLikeRow[i].msgNo, "disabled": true }));
          //           // console.log($("#" + chkLikeRow[i].msgNo).attr("disabled"));
          //         }
          //         else {
          //           console.log("沒有被打賞過");
          //         }
          //       }

          //     },
          //     error: function (chkLikeRow) {
          //       console.log(chkLikeRow);
          //     },
          //   });
          // });

          /* AJAX 打賞留言跳金幣,並只能打賞一次 */
          $(document).on("click", ".like", function (e) {
            // console.log(e.target.parentNode);
            let obj = e.target.parentNode.dataset.like;
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
                  obj.disabled = true;
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


          /* 檢查是否已檢舉 */
          // $(function checkReport() {
          //   let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
          //   // let mesgNo = msgRow[i].msgNo;
          //   // console.log(msgRow[j].msgNo);
          //   // console.log(memNo); 6
          //   $.ajax({
          //     url: "./phps/cav-checkLike.php",
          //     type: "GET",
          //     dataType: "json",
          //     data: { "memNo": memNo },
          //     success: function (chkReportRow) {
          //       console.log(chkReportRow);
          //       let letReply = "";
          //       let msgNum = new Array();

          //       // console.log("會員編號", memNo); 6
          //       // console.log("有打賞", chkReportRow); 6
          //       // console.log("留言", msgRow); 6
          //       // console.log("有打賞過留言編號", chkReportRow[0].msgNo); 6
          //       // console.log("留言編號", msgRow[0].msgNo); 6


          //       for (let j = 0; j < msgRow.length; j++) {
          //         //撈出所有回覆
          //         letReply = letterReply(
          //           letReply,
          //           msgRow[j].memNo,
          //           msgRow[j].msgTime,
          //           msgRow[j].msgContent,
          //           msgRow[j].msgNo,
          //         );
          //         msgNum[j] = msgRow[j].msgNo;
          //         $(".cav-replys").html(letReply);
          //       }

          //       console.log(msgNum);
          //       for (i = 0; i < chkReportRow.length; i++) {
          //         if ($.inArray(chkReportRow[i].msgNo, msgNum) != -1 && memNo == chkReportRow[i].memNo) {
          //           console.log(msgNum);
          //           console.log(chkReportRow[i].msgNo);
          //           $("#report" + chkReportRow[i].msgNo).attr({ "data-report": chkReportRow[i].msgNo, "disabled": true });
          //           console.log($("#report" + chkReportRow[i].msgNo));
          //         }
          //         else {
          //           console.log("沒有被打賞過");
          //         }
          //       }

          //     },
          //     error: function (chkReportRow) {
          //       console.log(chkReportRow);
          //     },
          //   });
          // });

          // //檢舉留言跳窗
          var reportThis;
          $(document).on("click", ".report", function (e) {
            obj1 = e.target.parentNode;
            reportThis = $(this).on("click").attr("data-report");//被檢舉留言
            $(".cav-reportList").toggle();
          });
          $(document).on("click", ".closeTag", function () {
            $(".cav-reportList").css("display", "none");
          });
          $(document).on("click", ".cav-sendReport", function (e) {
            if ($("#cav-reportSelector").val() == null) {
              alert("請選擇原因");
              console.log($("#cav-reportSelector").val());
              e.preventDefault();
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
                    obj1.disabled = true;
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
        },
        error: function (msgRow) {
          console.log(msgRow);
        }
      });


      //打賞信件跳金幣,並只能打賞一次
      $(".letLike").on("click", function (e) {
        // console.log(e.target.parentNode);
        let obj = e.target.parentNode;
        let likeThis = $(this).attr("data-like");
        console.log(likeThis);
        let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
        let now = new Date();
        let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
          " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.log(likeThis);
        console.log(whoLike);
        console.log(likeTime);
        $.ajax({
          url: "./phps/cav-letLike.php",
          type: "GET",
          dataType: "json",
          data: {
            "likeThis": likeThis,
            "whoLike": whoLike,
            "likeTime": likeTime,
          },
          success: function (likeRowLet) {
            console.log(likeRowLet);
            console.log(whoLike)
            if (likeRowLet.memNo == whoLike) {
              obj.disabled = true;
              console.log(obj);
              // console.log(666);
            } else {
              console.log(111);
            }
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

      // $(document).on("click", ".letReport", function () {
      //   reportThis2 = $(this).on("click").attr("data-report");//被檢舉留言
      //   console.log(reportThis2);
      //   $(".cav-reportList").toggle();
      // });
      // $(document).on("click", ".closeTag", function () {
      //   $(".cav-reportList").css("display", "none");
      // });
      // $(document).on("click", ".cav-sendReport", function (e) {
      //   if ($("#cav-reportSelector").val() == null) {
      //     alert("請選擇原因");
      //     e.preventDefault();
      //   } else {
      //     $(".cav-reportList").toggle();
      //     alert("檢舉已送出，我們將盡速審核");
      //     let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
      //     let now = new Date();//檢舉時間
      //     let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
      //       " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      //     let letRepReason = $("#cav-reportSelector").val();//檢舉原因
      //     console.log(reportThis2);
      //     console.log(whoReport);
      //     console.log(reportTime);
      //     console.log(letRepReason);
      //     $.ajax({
      //       url: "./phps/cav-letReport.php",
      //       type: "GET",
      //       dataType: "json",
      //       data: {
      //         "whoReport": whoReport,
      //         "reportThis": reportThis2,
      //         "reportTime": reportTime,
      //         "letRepReason": letRepReason,
      //       },
      //       success: function (reportRowLet) {
      //         console.log(reportRowLet);
      //         if (reportRowLet.msgNo == 0) {
      //           obj.disabled = true;
      //           console.log(obj);
      //           // console.log(666);
      //         } else {
      //           console.log(111);
      //         }
      //       },
      //       error: function (reportRowLet) {
      //         console.log(reportRowLet);
      //       }
      //     });
      //     e.preventDefault();
      //   }
      // });


    });




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
    });
    // });


    //bookMarkR
    // $(function () {
    $("a.tab2").on("click", function (e) {
      e.preventDefault();

      $(this).closest("ul").find("a.tab2").removeClass("-on");
      $(this).addClass("-on");

      $("div.tab2").removeClass("-on");
      $("div.tab2." + $(this).attr("data-target")).addClass("-on");
    });
    // });

    //信件分類按鈕
    // $(function () {
    $("div.btn").on("click", function (e) {
      $("div.btn").removeClass("click");
      $(this).addClass("click");
    });
    // });

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

    //顯示信件紀錄更多選項
    // $(function () {
    //   $(".cav-letSetting").on("click", function () {
    //     $(this).children(".cav-landLetter").toggle();
    //     event.stopPropagation();
    //   });

    // });

    //打賞跳金幣,並只能打賞一次
    // $(function () {
    //   $(".like").on("click", function () {
    //     $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
    //     console.log("coin");
    //     setTimeout(() => {
    //       $(".cav-commId").removeClass('active');
    //     }, 1000)
    //     $(this).attr("disabled", true);
    //   });
    // });

    /* 檢舉跳窗 */
    $(document).on("click", ".report", function () {
      $(".cav-reportList").toggle();
    });
    $(".closeTag").on("click", function () {
      $(".cav-reportList").toggle();
    });
    $(".cav-sendReport").on("click", function (e) {
      if ($("#cav-reportSelector").val() == null) {
        alert("請選擇原因");
        e.preventDefault();
      } else {
        $(".cav-reportList").toggle();
        alert("檢舉已送出，我們將盡速審核");
        // $("#cav-reportForm").submit();
      }
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
  // await cavAjax();

  window.addEventListener("load", function () {
    setTimeout(cavJs, 200);
  });
  // await cavJs();


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

//////////////////////////以下為我的物品///////////////////////////////
////////////////////////更換預設的圖案/郵戳

function cavePosChange(json) {////////////////////////更換預設郵戳
  let cavedata = JSON.parse(json);
  let xhr = new XMLHttpRequest();
  let memNo = cavedata.memNo;
  let matPosNo = document.getElementsByClassName('wearing')[0].dataset.pos;
  let matPosNoOld = cavedata.matPosNo;
  // console.log("cavedata",cavedata);
  console.log("memNo", memNo);
  console.log("matPosNo", matPosNo);
  console.log("matPosNoOld", matPosNoOld);
  xhr.onload = function () {
    console.log("yaa");
  }

  xhr.open("post", "phps/cave_posChange.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_poschange = `memNo=${memNo}&matPosNo=${matPosNo}&matPosNoOld=${matPosNoOld}`;
  xhr.send(data_poschange);
}

function cavePatChange(json) {////////////////////////更換預設圖案
  let cavedata = JSON.parse(json);
  console.log("cavedata", cavedata);
}



////////////////////////動態生成圖案/郵戳/素材/工具
function showCaveData(json) {////////////////////////信紙,Air幣資訊
  let memdata = JSON.parse(json);
  document.getElementById('cavPaper').innerText = "信紙:" + memdata.letCount;
  document.getElementById('cavCoin').innerText = "Air幣:" + memdata.airCoin;
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
        <div id="cavPatItem${matPatNo}" value="${matPatNo}" class="cav-prod cav-prodI">
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
        console.log("materialRow[i].matURL", materialRow[i].matURL)
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
    console.log('matPosNo', member.matPosNo);
    console.log('matPatNo', member.matPatNo);
    if (member.memNo) {
      showCaveData(xhr.responseText);//show aircoin letcount
      getMatPostMark(xhr.responseText);//郵戳資料撈取
      getMatPattern(xhr.responseText);//圖案撈取
      getMaterial(xhr.responseText);//素材撈取
      getTool(xhr.responseText);//工具撈取
      let cavePosChangeBtn = document.getElementById('btns');
      let cavePatChangeBtn = document.getElementById('btns2');
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
