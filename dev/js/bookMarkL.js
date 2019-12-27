$(function () {
    $("a.tab1").on("click", function (e) {
        e.preventDefault();

        $(this).closest("ul").find("a.tab1").removeClass("-on");
        $(this).addClass("-on");


        $("div.tab1").removeClass("-on");
        $("div.tab1." + $(this).attr("data-target")).addClass("-on");
    });
});   