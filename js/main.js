jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('scrolled');
        } else {
            $('#nav').removeClass('scrolled');
        }
    });

    $("#nav-toggle").click(function() {
        if($(this).data("toggle") === "collapse") {
            openSideMenu();
        } else {
            closeSideMenu();
        }
    });

    $("a").click(function() {
        if(isSideMenuOpen())
            closeSideMenu();
    });
    
});

function openSideMenu() {
    $("#nav-toggle").data("toggle", "expand");
    $("#nav-list").addClass("expand");
    $("#nav").addClass("open");
};

function closeSideMenu() {
    $("#nav-toggle").data("toggle", "collapse");
    $("#nav-list").removeClass("expand");
    $("#nav").removeClass("open");
};

function isSideMenuOpen() {
    return $("#nav-toggle").data("toggle") === "expand";
}

$(document).swipe({
    threshold:150,
    maxTimeThreshold:1000,
    swipe:function(event, direction, distance, duration, fingerCount)
        {
            if(direction == "right")
                openSideMenu();
            else if(direction == "left")
                closeSideMenu();
        }
});