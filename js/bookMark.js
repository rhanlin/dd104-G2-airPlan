$(function () {
    $("a.tab").on("click", function (e) {
        e.preventDefault();

        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");


        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });
});   