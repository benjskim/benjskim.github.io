$(document).ready(function() {
  $(".headpic").css({ opacity: 1});
  $(".portfolio-card").css({ opacity: 1});
  $(".about-bg-img").css({ opacity: 1});
  $(".fancybox").fancybox();
  $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
});
