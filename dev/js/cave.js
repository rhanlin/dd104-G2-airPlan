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
      console.log(witchLetMsg);
      $.ajax({
        url: "./phps/cav-letMessage.php",
        type: "GET",
        dataType: "json",
        data: { letNo: witchLetMsg },
        success: function (msgRow) {
          console.log("信件回復", msgRow);
          let letReply = "";

          for (let i = 0; i < msgRow.length; i++) {
            //撈出所有回覆
            letReply = letterReply(
              letReply,
              msgRow[i].memNo,
              msgRow[i].msgTime,
              msgRow[i].msgContent,
              msgRow[i].msgNo
            );
            console.log(msgRow[i].msgNo);
            $(function checkLike() {
              let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
              console.log(memNo);
              $.ajax({
                url: "./phps/cav-checkLike.php",
                type: "GET",
                dataType: "json",
                data: { "memNo": memNo },
                success: function (chkLikeRow) {
                  // let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
                  // console.log(memNo);
                  // console.log(chkLikeRow);
                  console.log("檢查打賞留言編號", chkLikeRow[i].msgNo);
                  console.log("檢查打賞會員編號", chkLikeRow[i].memNo);

                  if (chkLikeRow[i].msgNo == msgRow[i].msgNo) {
                    $(".like").attr("disabled", true);
                    console.log($(".like").attr("disabled"));
                  } else {
                    console.log($(".like").attr("disabled"));
                    console.log(memNo)
                  }
                },
                error: function (chkLikeRow) {
                  console.log(chkLikeRow);
                },
              });
            });




            // $(function checkLike() {
            //   $.ajax({
            //     url: "./phps/cav-checkLike.php",
            //     type: "GET",
            //     dataType: "json",
            //     // data: {},
            //     success: function (likeRow2) {
            //       let memNo = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
            //       // let msgNo = $(".like").attr("data-like");
            //       console.log(likeRow2);
            //       // console.log(likeRow2);
            //       // console.log(memNo);
            //       // if (msgRow[i].msgNo == likeRow2.msgNo) {
            //       if (msgRow[i].msgNo == likeRow2.msgNo && memNo == likeRow2.msgNo) {
            //         // $(".like").attr("disabled", true);
            //         $(".like").attr("disabled", true);
            //         console.log($(".like"));
            //       } else {
            //         console.log($(".like"));
            //       }
            //     },
            //     error: function (likeRow2) {
            //       console.log(likeRow2);
            //     },
            //   });
            // });

            // $(function () {
            //   $.ajax({
            //     url: "./phps/cav-checkLike.php",
            //     type: "GET",
            //     dataType: "json",
            //     // data: {},
            //     success: function () {

            //     },
            //     error: function () {
            //       console.log();
            //     },
            //   });
            // });

          }
          $(".cav-replys").html(letReply);


          //AJAX 打賞留言跳金幣,並只能打賞一次
          $(document).on("click", ".like", function (e) {
            // console.log(e.target.parentNode);
            let obj = e.target.parentNode;
            let likeThis = $(this).attr("data-like");
            let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
            let now = new Date();
            let likeTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
              " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            console.log(likeThis);
            console.log(whoLike);
            console.log(likeTime);
            $.ajax({
              url: "./phps/cav-msgLike.php",
              type: "GET",
              dataType: "json",
              data: {
                "likeThis": likeThis,
                "whoLike": whoLike,
                "likeTime": likeTime,
              },
              success: function (likeRow) {
                console.log(likeRow);
                if (likeRow.memNo != 0) {
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



          // //檢舉留言跳窗
          var reportThis;
          $(function () {
            $(".report").on("click", function () {
              reportThis = $(this).on("click").attr("data-report");//被檢舉留言
              $(".cav-reportList").toggle();
            });
            $(".closeTag").on("click", function () {
              $(".cav-reportList").css("display", "none");
            });
            $(".cav-sendReport").on("click", function (e) {
              if ($("#cav-reportSelector").val() == null) {
                alert("請選擇原因");
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
                    if (reportRow.msgNo == 0) {
                      obj.disabled = true;
                      console.log(obj);
                      // console.log(666);
                    } else {
                      console.log(111);
                    }
                  },
                  error: function (reportRow) {
                    console.log(reportRow);
                  }
                });
                e.preventDefault();
              }
            });

          });
        },
        error: function (msgRow) {
          console.log(msgRow);
        }
      });


      //打賞信件跳金幣,並只能打賞一次
      $(function () {
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
      });


      // //檢舉信件跳窗
      var reportThis2;
      $(function () {
        $(".letReport").on("click", function () {
          reportThis2 = $(this).on("click").attr("data-report");//被檢舉留言
          console.log(reportThis2);
          $(".cav-reportList").toggle();
        });
        $(".closeTag").on("click", function () {
          $(".cav-reportList").css("display", "none");
        });
        $(".cav-sendReport").on("click", function (e) {
          if ($("#cav-reportSelector").val() == null) {
            alert("請選擇原因");
            e.preventDefault();
          } else {
            $(".cav-reportList").toggle();
            alert("檢舉已送出，我們將盡速審核");
            let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
            let now = new Date();//檢舉時間
            let reportTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() +
              " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            let letRepReason = $("#cav-reportSelector").val();//檢舉原因
            console.log(reportThis2);
            console.log(whoReport);
            console.log(reportTime);
            console.log(letRepReason);
            $.ajax({
              url: "./phps/cav-letReport.php",
              type: "GET",
              dataType: "json",
              data: {
                "whoReport": whoReport,
                "reportThis": reportThis2,
                "reportTime": reportTime,
                "letRepReason": letRepReason,
              },
              success: function (reportRowLet) {
                console.log(reportRowLet);
                if (reportRowLet.msgNo == 0) {
                  obj.disabled = true;
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
            e.preventDefault();
          }
        });

      });
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

    //檢舉跳窗
    // $(function () {
    //   $(".report").on("click", function () {
    //     $(".cav-reportList").toggle();
    //   });
    //   $(".closeTag").on("click", function () {
    //     $(".cav-reportList").toggle();
    //   });
    //   $(".cav-sendReport").on("click", function (e) {
    //     if ($("#cav-reportSelector").val() == null) {
    //       alert("請選擇原因");
    //       e.preventDefault();
    //     } else {
    //       $(".cav-reportList").toggle();
    //       alert("檢舉已送出，我們將盡速審核");
    //       // $("#cav-reportForm").submit();
    //     }
    //   });
    // });

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
              <button class="circle button like" data-like="${msgNo}">
                  <img src="./img/cave/coin.png" alt=""></i></button>
          </div>
      </div>
      <div class="cav-commReport">
          <div class="circle threed ">
              <button class="circle button report" data-report="${msgNo}">
                  <img src="./img/cave/exclamation-button.png"
                      alt=""></button>
          </div>
      </div>
  </div>
</div>
`;
  return letReply;
}


