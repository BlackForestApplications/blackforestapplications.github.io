jQuery(document).ready(function ($) {

    new Splide('#splide').mount();

    /* toggle transparant navbar on scroll */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('scrolled');
        } else {
            $('#nav').removeClass('scrolled');
        }
    });

    /* Mobile SideMenu toggle */
    $("#nav-toggle").click(function() {
        if($(this).data("toggle") === "collapse") {
            openSideMenu();
        } else {
            closeSideMenu();
        }
    });

    /* Close SideMenu on anchor click */
    $("a").click(function() {
        if(isSideMenuOpen())
            closeSideMenu();
    });

    /* Smooth Scroll on anchor click */
    $('a[href*="#"]')
        .not('[href="#"]')
        .click(function(event) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        // 80px offset due to the navbar
                        scrollTop: target.offset().top - 80
                    }, 500);
                    return false;
                }
            }
    });
    
});

/* open url in new tab */
function openUrl(url) {
    var tab = window.open(url, "_blank");
    tab.focus();
}

/*
    Mobile SideMenu functions
*/
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

/* 
    Mobile SideMenu open on swipe
*/
$(document).swipe({
    threshold:150,
    maxTimeThreshold:1000,
    excludedElements: $.fn.swipe.defaults.excludedElements+", p, a, h1, h2, h3, select",
    swipe:function(event, direction, distance, duration, fingerCount)
        {
            if(direction == "right")
                openSideMenu();
            else if(direction == "left")
                closeSideMenu();
        }
});

/*
    Rainbow hover effect
*/
function toggleRainbowEffect() {
    document.body.classList.toggle("rnbw");
}