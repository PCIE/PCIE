(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(window).width() > 750) {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrink');
                $("#fat").css("display", "none");
                $("#tiny").css("display", "inline");
                $(".categorie").css("display", "none");
                $(".sous-categorie").css("display", "inline");
                $('#secondNavBar').css("visibility", "hidden");
            } else {
                $('nav').removeClass('shrink');
                $("#fat").css("display", "inline");
                $("#tiny").css("display", "none");
                $(".categorie").css("display", "inline");
                $(".sous-categorie").css("display", "none");
                $('#secondNavBar').css("visibility", "visible");
            }
        }
    })

    $(window).resize(function () {
        setTimeout(function () {
            if ($(window).width() > 750) {
                $("#fat").css("display", "inline");
                $("#tiny").css("display", "none");
                $(".sous-categorie").css("display", "none");
            } else {
                $("#fat").css("display", "none");
                $("#tiny").css("display", "inline");
                $(".sous-categorie").css("display", "inline");
            }
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrink');
            } else {
                $('nav').removeClass('shrink');
            }
        }, 100);
    })

})(jQuery);