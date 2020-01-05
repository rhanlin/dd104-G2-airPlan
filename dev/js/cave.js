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
  let cavBoxRight = document.querySelector('.cav-boxFrontRight');
  $(".cav-letters").on("click", function (e) {
    cavBoxRight.classList.add('active');
  });
  $('.cav-letClose').click(() => {
    cavBoxRight.classList.remove('active');
  });
});



//顯示信件紀錄更多選項
$(function () {
  $(".cav-letSetting").on("click", function () {
    $(this).children(".cav-landLetter").toggle();
    event.stopPropagation();
  });

});

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
$(function(){
  $(".cav-prodI").find("img").on("click",function(){
    let ii = $(this).attr("src");
    // console.log(ii);
    $(".cav-mask-1").css("background-image", `url(${ii})`);
  });
});

//預覽要套用的郵戳
$(function(){
  $(".cav-prodU").find("img").on("click",function(){
    let uu = $(this).attr("src");
    // console.log(uu);
    $(".cav-mask-2").css("background-image", `url(${uu})`);
  });
});