$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

$(window).scroll(function () {
  if ($(".navbar").length && $(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

$(function () {
  $('.page-scroll a').bind('click', function (event) {
      var $anchor = $(this);
      const target = $($anchor.attr('href'));
      if (target.length) {
          $('html, body').stop().animate({
              scrollTop: target.offset().top - 49
          }, 1000);
          event.preventDefault();
      }
  });
});