$(document).ready(function() {
  $(".fancybox").fancybox();
  $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
});
