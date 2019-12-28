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




//單一信件跳窗
let cavLet = document.getElementsByClassName("cav-letters")[0];
cavLet.addEventListener("click", popLetter);

function popLetter() {
  document.getElementsByClassName("cav-letterBg")[0].style.display = "block";
}
function closeLetter() {
  document.getElementsByClassName("cav-letterBg")[0].style.display = "none";
}

//顯示信件紀錄更多選項
$(function () {
  $(".cav-letSetting").on("click", function () {
    $(this).children(".cav-landLetter").toggle();
    event.stopPropagation();
  });

});
// let landLet = document.getElementsByClassName("fas")[0];
// landLet.addEventListener("click", showlandLetter);

// function showlandLetter() {
//   document.getElementsByClassName("cav-landLetter")[0].style.display = "block";
// }
// function closelandLetter() {
//   document.getElementsByClassName("cav-landLetter")[0].style.display = "none";
// }

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

