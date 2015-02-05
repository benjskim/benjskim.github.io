$(document).ready(function() {
  $(".portfolio-card").css({ opacity: 1});
  $(".fancybox").fancybox();
  $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
});
