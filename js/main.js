jQuery(document).ready(function ($) {

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
};

function closeSideMenu() {
    $("#nav-toggle").data("toggle", "collapse");
    $("#nav-list").removeClass("expand");
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