$(document).ready(function() {
  $(".fadeheader").transition({
    x: '30px',
    opacity: 1,
    duration: 1200,
    delay: 1500
  })
  $(".char1").transition({
    y: '30px',
    opacity: 1,
    duration: 1000,
    delay: 500
  })

  $('nav').fadeIn();
});