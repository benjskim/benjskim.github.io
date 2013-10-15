$(function() {
  $('.subMenu').smint({
    'scrollSpeed' : 1000
  });

  $('.flexslider').flexslider({
    animation: "slide"
  });

  $(".moreabout").click(function(){
    if ($(".moreabout").text() == "Read More") 
      {
        $(".moreabout").text("Read Less");
      } else 
        {
          $(".moreabout").text("Read More");
        }
    $(".moreabouttext").slideToggle();
  });
});
