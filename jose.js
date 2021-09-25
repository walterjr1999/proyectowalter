import throttle from "https://cdn.skypack.dev/lodash@4.17.21/throttle";

function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add("is-active");
  } else {
    $$header.classList.remove("is-active");
  }
}

const $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 300));

(function($) {
    $(function() {
      // Store menu container
      var mobileMenu = '#mobile-menu';
      // Store Trigger
      var mobileBtn = '#mobile-footer-btn';
  
      var rotation = '.mobile-btn-close';
  
      $(mobileBtn).on("click", function(e) {
        e.stopPropagation();
        if ($(mobileMenu).hasClass('mobile-menu-hide') || $(rotation).hasClass('is-rotating')) {
          $(mobileMenu).removeClass("mobile-menu-hide").addClass("mobile-menu-show");
          $(rotation).removeClass("is-rotating").addClass("is-rotating-back");
        } else {
          $(mobileMenu).removeClass("mobile-menu-show").addClass("mobile-menu-hide");
          $(rotation).removeClass('is-rotating-back').addClass('is-rotating');
        }
      });
    });
  })(jQuery);