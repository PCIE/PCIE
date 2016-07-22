(function($) {
    "use strict";

    $('#tiny').css("visibility", "hidden");
    $('.sous-categorie').hide();

    if ($(window).width() > 770) {
      if ($(document).scrollTop() > 50) {
        $('#header-logo img')
             .css({'width':'104px','height':'40px'})
             .attr('src','img/pcie-logo-tiny.gif');
      } else {
        $('#header-logo img')
             .css({'width':'240px','height':'90px'})
             .attr('src','img/pcie-logo-fat.png');
      }
    } else {
      $('#header-logo img')
           .css({'width':'104px','height':'40px'})
           .attr('src','img/pcie-logo-tiny.gif');
    }
    $(window).scroll(function() {
      if ($(window).width() > 770) {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
          $('.categorie').hide();
          $('#secondNavBar').css("visibility", "hidden");
          $('.sous-categorie').show();
          $('#header-logo img')
               .css({'width':'104px','height':'40px'})
               .attr('src','img/pcie-logo-tiny.gif');
        } else {
          $('nav').removeClass('shrink');
          $('.categorie').show();
          $('#secondNavBar').css("visibility", "visible");
          $('.sous-categorie').hide();
          $('#header-logo img')
               .css({'width':'240px','height':'90px'})
               .attr('src','img/pcie-logo-fat.png');
        }
      } else {
        $('.categorie').show();
        $('#secondNavBar').css("visibility", "visible");
      }
    });

    $(window).resize(function(){
      if ($(window).width() > 770) {
          $('#secondNavBar').css("visibility", "visible");
          $('#header-logo img')
               .css({'width':'240px','height':'90px'})
               .attr('src','img/pcie-logo-fat.png');
      } else {
          $('#header-logo img')
               .css({'width':'104px','height':'40px'})
               .attr('src','img/pcie-logo-tiny.gif');
      }
    });

    $(document).on({
      mouseenter: function () {
        if ($('nav').hasClass('shrink') && $(window).width() > 770) {
          $('nav').removeClass('shrink');
          $('.categorie').show();
          $('#secondNavBar').css("visibility", "visible");
          $('.sous-categorie').hide();
          $('#header-logo img')
               .css({'width':'240px','height':'90px'})
               .attr('src','img/pcie-logo-fat.png');
        }
      },
      mouseleave: function () {
        if (!$('nav').hasClass('shrink') && $(document).scrollTop() > 50 && $(window).width() > 770) {
          $('nav').addClass('shrink');
          $('.categorie').hide();
          $('#secondNavBar').css("visibility", "hidden");
          $('.sous-categorie').show();
          $('#header-logo img')
               .css({'width':'104px','height':'40px'})
               .attr('src','img/pcie-logo-tiny.gif');
        }

      }
  }, ".navbar");
})(jQuery);
