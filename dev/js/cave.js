//bookMarkL
$(function () {
  $("a.tab1").on("click", function (e) {
    e.preventDefault();

    $(this).closest("ul").find("a.tab1").removeClass("-on");
    $(this).addClass("-on");


    $("div.tab1").removeClass("-on");
    $("div.tab1." + $(this).attr("data-target")).addClass("-on");
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

//選取所要套用的圖案
$(function () {
  $("div.cav-prodI").on("click", function (e) {

    $("div.cav-prodI").removeClass("wearing");
    $(this).addClass("wearing");
  });
});

//選取所要套用的郵戳
$(function () {
  $("div.cav-prodU").on("click", function (e) {

    $("div.cav-prodU").removeClass("wearing");
    $(this).addClass("wearing");
  });
});

