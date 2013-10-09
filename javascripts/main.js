$(function() {
  $('.subMenu').smint({
    'scrollSpeed' : 1000
  });

  $('.flexslider').flexslider({
    animation: "slide"
  });

  $(".moreabout").click(function(){
    $(".moreabouttext").slideToggle();
  });
});
