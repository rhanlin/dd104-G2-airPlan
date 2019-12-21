$(function () {
    $("a.tab2").on("click", function (e) {
        e.preventDefault();

        $(this).closest("ul").find("a.tab2").removeClass("-on");
        $(this).addClass("-on");


        $("div.tab2").removeClass("-on");
        $("div.tab2." + $(this).attr("data-target")).addClass("-on");
    });
});   