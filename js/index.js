new WOW().init();

// Scroll fixed header
$(function () {
  var fixedHeader = 500;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll > fixedHeader) {
      $(".collapse").addClass("header-fixed");
      $(".navbar-nav").addClass("header-nav-fixed");
    } else {
      $(".collapse").removeClass("header-fixed");
      $(".navbar-nav").removeClass("header-nav-fixed");
    }
  });
});

function getCurrentScroll() {
  return window.pageYOffset;
}
