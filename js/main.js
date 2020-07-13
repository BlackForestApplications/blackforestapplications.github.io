jQuery(document).ready(function ($) {

    $("#nav-toggle").click(function() {
        console.log($("#nav-toggle").data("toggle"));
        if($(this).data("toggle") === "collapse") {
            $(this).data("toggle", "expand");
            $("#nav-list").addClass("expand");
        } else {
            $(this).data("toggle", "collapse");
            $("#nav-list").removeClass("expand");
        }
    });
    
});