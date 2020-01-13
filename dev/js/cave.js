$(document).ready(function () {
  async function cavAjax() {
    /* AJAX  撈取我的信件、撈取信件內容  */
    await $.ajax({
      url: 'http://localhost/dev-g2/dev/phps/cav-whosLetter.php',
      type: "POST",
      dataType: "json",
      data: {
        "memNo": $("#cavMemberN").text().split(":")[$("#cavMemberN").text().split(":").length - 1]
      },

      success: function (letRow) {
        console.log(letRow);
        let myLet = "";
        let letTit = "";
        let fullLet = new Array();

        for (i = 0; i < letRow.length; i++) {
          myLet = myLetter(myLet, letRow[i].letTitle, letRow[i].letTime, letRow[i].letNo);//撈取歷史信件
          fullLet.push([letRow[i].letTitle, letRow[i].letContent, letRow[i].imgUrl]);//單一信件所需內容
          // console.log(fullLet);

          $('.cav-histLetter2').html(myLet);
        }

        /* 點擊歷史信件秀出對應信件標題、內文、圖片 */
        function letterContent(fullLet) {
          $('.cav-letters').on("click", function () {
            letTit = $(this).find('.cav-letTitle').text();
            // console.log(letTit);
            // console.log(fullLet)

            for (let i = 0; i < fullLet.length; i++) {
              if (letTit == fullLet[i][0]) {
                $(".letter-tittle").children("h3").text(fullLet[i][0]);
                $(".text").children("p").text(fullLet[i][1]);
                $(".letter-upload-img").children("img").attr("src", fullLet[i][2]);
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
        let witchLetMsg = $(this).find('.cav-letTitle').attr("data-letter-num");
        $.ajax({
          url: "http://localhost/dev-g2/dev/phps/cav-letMessage.php",
          type: "GET",
          dataType: "json",
          data: { "letNo": witchLetMsg },
          success: function (msgRow) {
            console.log(msgRow);
            let letReply = "";
            // let witchLetMsg;

            // console.log(witchLetMsg);

            for (let i = 0; i < msgRow.length; i++) { //撈出所有回覆
              letReply = letterReply(letReply, msgRow[i].memNo, msgRow[i].msgTime, msgRow[i].msgContent);
              // console.log(letReply);

            }
            $('.cav-replys').html(letReply);


            //打賞跳金幣,並只能打賞一次
            $(function () {
              $(".like").on("click", function () {
                $(this).parents(".cav-letComment").find(".cav-commId").addClass("active");
                console.log("coin");
                setTimeout(() => {
                  $(".cav-commId").removeClass('active');
                }, 1000)
                $(this).attr("disabled", true);
              });
            });

            //檢舉跳窗
            $(function () {
              $(".report").on("click", function () {
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
            });

          },
          error: function (msgRow) {
            console.log(msgRow);
          }
        });
      })
    });
  }

  window.addEventListener("load", function () {
    setTimeout(cavAjax, 100)
  });



  // function getMemberNo() {
  //   var memberNo = document.getElementById("cavMemberN").innerText;
  //   let xhr = new XMLHttpRequest();
  //   xhr.open("post", "./phps/whosLetter.php", true);
  //   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  //   let data_info = `memNo = ${memberNo}`;
  //   xhr.send(data_info);

  // }


  /* ------------------------------------------------------------------- */
  function cavJs() {
    //bookMarkL
    $(function () {
      $("a.tab1").on("click", function (e) {
        e.preventDefault();

        $(this).closest("ul").find("a.tab1").removeClass("-on");
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

        $(this).closest("ul").find("a.tab2").removeClass("-on");
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
      })
    });


    //更換按鈕
    $('.switchBtn').mousedown(function () {
      $(this).addClass('clicked');
    });
    $('.switchBtn').mouseup(function () {
      $(this).removeClass('clicked');
    });

    $('.orderBtn').mousedown(function () {
      $(this).addClass('clicked');
    });
    $('.orderBtn').mouseup(function () {
      $(this).removeClass('clicked');
    });


    //單一信件跳窗
    $(function () {
      $(".cav-letters").on("click", function (e) {
        $('.cav-boxFrontRight').addClass('active');
      });
      $(".cav-letClose").on("click", function (e) {
        $('.cav-boxFrontRight').removeClass('active');
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
      $(".cav-prodI").find("img").on("click", function () {
        let ii = $(this).attr("src");
        // console.log(ii);
        $(".cav-mask-1").css("background-image", `url(${ii})`);
      });
    });

    //預覽要套用的郵戳
    $(function () {
      $(".cav-prodU").find("img").on("click", function () {
        let uu = $(this).attr("src");
        // console.log(uu);
        $(".cav-mask-2").css("background-image", `url(${uu})`);
      });
    });
  }

  window.addEventListener("load", function () {
    setTimeout(cavJs, 200)
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
       `
    return myLet;
  };

  //動態產生回復留言
  function letterReply(letReply, memNo, msgTime, msgContent) {
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
  `
    return letReply;
  };
});

