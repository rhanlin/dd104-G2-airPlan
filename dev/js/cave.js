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
            myLet,
            letRow[i].letTitle,
            letRow[i].letTime,
            letRow[i].letNo
          ); //撈取歷史信件
          fullLet.push([
            letRow[i].letTitle,
            letRow[i].letContent,
            letRow[i].imgUrl
          ]); //單一信件所需內容
          // console.log(fullLet);

          $(".cav-histLetter2").html(myLet);
        }

        /* 點擊歷史信件秀出對應信件標題、內文、圖片 */
        function letterContent(fullLet) {
          $(".cav-letters").on("click", function () {
            letTit = $(this)
              .find(".cav-letTitle")
              .text();
            // console.log(letTit);
            // console.log(fullLet)

            for (let i = 0; i < fullLet.length; i++) {
              if (letTit == fullLet[i][0]) {
                $(".letter-tittle")
                  .children("h3")
                  .text(fullLet[i][0]);
                $(".text")
                  .children("p")
                  .text(fullLet[i][1]);
                $(".letter-upload-img")
                  .children("img")
                  .attr("src", fullLet[i][2]);
                // $(".cav-letNo").text("no." + fullLet[i][3]);
                console.log(fullLet[i][0]);
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



    /*AJAX 撈取信件回覆 */
    $(function () {
      $(".cav-letters").on("click", function () {
        let witchLetMsg = $(this).find(".cav-letTitle").attr("data-letter-num");
        $.ajax({
          url: "./phps/cav-letMessage.php",
          type: "GET",
          dataType: "json",
          data: { letNo: witchLetMsg },
          success: function (msgRow) {
            console.log(msgRow);
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
                    console.log("----", chkLikeRow[i].msgNo);
                    console.log("----", chkLikeRow[i].memNo);

                    if (chkLikeRow[i].msgNo == msgRow[i].msgNo && chkLikeRow[i].memNo == memNo) {
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


            //打賞跳金幣,並只能打賞一次
            $(function () {
              $(".like").on("click", function (e) {
                // console.log(e.target.parentNode);
                let obj = e.target.parentNode;
                let likeThis = $(this).attr("data-like");
                console.log(likeThis);
                let whoLike = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];
                let now = new Date();
                let likeTime = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() +
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
            });


            // //檢舉跳窗
            $(function () {
              $(".report").on("click", function () {
                // $(this).on("click", function () {
                // console.log($(".report"));
                $(".cav-reportList").toggle();
              });
              $(".closeTag").on("click", function () {
                $(".cav-reportList").css("display", "none");
                console.log(".cav-reportList");
              });
              $(".cav-sendReport").on("click", function (e) {
                if ($("#cav-reportSelector").val() == null) {
                  alert("請選擇原因");
                  e.preventDefault();
                } else {
                  $(".cav-reportList").toggle();
                  alert("檢舉已送出，我們將盡速審核");
                  // e.preventDefault();
                  // $("#cav-reportForm").submit();
                }
              });
              // console.log($(this).attr("data-report"));
              // let reportThis = $(this).attr("data-report");//被檢舉留言
              // let whoReport = $("#cavMemberN").text().split("-")[$("#cavMemberN").text().split("-").length - 1];//檢舉會員
              // let now = new Date();//檢舉時間
              // let reportTime = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() +
              //   " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
              // let msgRepReason = $("#cav-reportSelector").val();//檢舉原因
              // console.log(reportThis);
              // console.log(whoReport);
              // console.log(reportTime);
              // console.log(msgRepReason);
              // $.ajax({
              //   url: "./phps/cav-msgReport.php",
              //   type: "GET",
              //   dataType: "json",
              //   data: {
              //     "whoReport": whoReport,
              //     "reportThis": reportThis,
              //     "reportTime": reportTime,
              //     "msgRepReason": msgRepReason,
              //   },
              //   success: function (reportRow) {
              //     console.log(reportRow);
              //     if (reportRow.memNo != 0) {
              //       obj.disabled = true;
              //       console.log(obj);
              //       // console.log(666);
              //     } else {
              //       console.log(111);
              //     }
              //   },
              //   error: function (reportRow) {
              //     console.log(reportRow);
              //   }
              // });
            });
          },
          error: function (msgRow) {
            console.log(msgRow);
          }
        });

        // function checkLike() {
        //   let xhr = new XMLHttpRequest();
        //   xhr.onload = function () {
        //     let member = JSON.parse(xhr.responseText);
        //     if (member.memNo) {
        //       document.getElementById("cavMemberN").innerText = '會員:' + member.memNo;
        //       document.getElementById("cavMemberH").innerText = '會員:' + member.memNo;
        //       document.getElementById("cavPaperN").innerText = '信紙:' + member.letCount;
        //       document.getElementById("cavPaperH").innerText = '信紙:' + member.letCount;
        //       document.getElementById("cavCoinN").innerText = 'Air幣:' + member.airCoin;
        //       document.getElementById("cavCoinH").innerText = 'Air幣:' + member.airCoin;
        //       document.getElementById("signInStatusIconN").style.color = 'green';
        //       document.getElementById("signInStatusIconH").style.color = 'green';
        //       document.getElementById("signInStatusN").innerHTML = "登出";
        //       document.getElementById("signInStatusH").innerHTML = "登出";
        //       console.log("1", member.memNo);
        //     }
        //   }
        //   xhr.open("get", "./phps/checkLike.php", true);
        //   xhr.send(null);
        // }
      });
    });
  }

  window.addEventListener("load", function () {
    setTimeout(cavAjax, 100);
  });


  /* ------------------------------------------------------------------- */
  function cavJs() {
    //bookMarkL
    $(function () {
      $("a.tab1").on("click", function (e) {
        e.preventDefault();

        $(this)
          .closest("ul")
          .find("a.tab1")
          .removeClass("-on");
        $(this).addClass("-on");

        $("div.tab1").removeClass("-on");
        $("div.tab1." + $(this).attr("data-target")).addClass("-on");

        $(".cav-preview-plan").removeClass("-on");
        $(".cav-preview-plan." + $(this).attr("data-target")).addClass("-on");
      });
    });
    //bookMarkR
    $(function () {
      $("a.tab2").on("click", function (e) {
        e.preventDefault();

        $(this)
          .closest("ul")
          .find("a.tab2")
          .removeClass("-on");
        $(this).addClass("-on");

        $("div.tab2").removeClass("-on");
        $("div.tab2." + $(this).attr("data-target")).addClass("-on");
      });
    });

    //信件分類按鈕
    $(function () {
      $("div.btn").on("click", function (e) {
        $("div.btn").removeClass("click");
        $(this).addClass("click");
      });
    });

    //顯示正在看的歷史信件
    $(function () {
      $(".cav-letters").on("click", function () {
        $(".cav-letters").removeClass("cav-looking");
        $(this).addClass("cav-looking");
      });
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

    //單一信件跳窗
    $(function () {
      $(".cav-letters").on("click", function (e) {
        $(".cav-boxFrontRight").addClass("active");
      });
      $(".cav-letClose").on("click", function (e) {
        $(".cav-boxFrontRight").removeClass("active");
      });
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
    setTimeout(cavJs, 200);
  });

  //資料串接
  // function showletter(jsonStr) {
  //   let letter = JSON.parse(jsonStr);
  //   let letTitle;
  //   let letTime;
  //   if (letter.memNo) {
  //     letTitle = letter.letTitle;
  //     letTime = letter.letTime;
  //     console.log(letTitle);
  //   }
  //   document.getElementsByClassName("cav-letTitle")[0].innerHTML = letTitle;
  //   document.getElementsByClassName("cav-letTime")[0].innerHTML = letTime;
  // }

  // function getletter() {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = function () {
  //     if (xhr.status == 200) {
  //       showletter(xhr.responseText);
  //     } else {
  //       alert("xhr.status");
  //     }
  //   }
  //   var url = "whosLetter.php?memNo=2";
  //   xhr.open("Get", url, true);
  //   xhr.send(null);
  // }

  //動態產生歷史信件
  function myLetter(myLet, letTitle, letTime, letter_num) {
    myLet += `
      <div class="cav-letters ">
      <div class="cav-letWord">
        <div>
          <p class="cav-letTitle" data-letter-num="${letter_num}">${letTitle}</p> 
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

  //動態產生回復留言
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
});
