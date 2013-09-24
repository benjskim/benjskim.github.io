$(function() {

  $(".fadeheader").transition({
    x: '35px',
    opacity: 1,
    duration: 1000,
    delay: 700
  });

  $(".char1").transition({
    y: '30px',
    opacity: 1,
    duration: 800,
    delay: 100
  });

  $('#container').fullContent({ 
    stages: 'div', 
    mapPosition: [{v: 1, h: 1}, {v: 2, h: 1}, {v: 3, h: 1}, {v: 4, h: 1}], 
    stageStart: 1, 
    speedTransition: 800, 
    idComplement: 'page_' 
  });
});