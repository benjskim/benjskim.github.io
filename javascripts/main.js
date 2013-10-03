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

  $(".slidingnav").pageslide();

  $("a[href='#resume']").click(function() {
    $('.modal').fadeIn(700);
    $('iframe').fadeIn(500);
  });

  $(".modal").click(function() {
    $('.modal').fadeOut(500);
    $('iframe').fadeOut(700);
  });

  // function transitionIn() {
  //   $('img').transition({
  //     y: '-25px',
  //     duration: 500
  //   });
  // }

  // function transitionOut() {
  //   $('img').transition({
  //     y: '0px',
  //     duration: 600
  //   });  
  // }

  // $('img').hoverIntent({ 
  //   over: transitionIn,
  //   timeout: 200,
  //   interval: 200,
  //   out: transitionOut
  // });

});


jQuery("nav").fitText(1.5, { minFontSize: '16px', maxFontSize: '16px' });
jQuery("h1").fitText(1.2, { minFontSize: '60px', maxFontSize: '80px' });
jQuery("h2").fitText(1.2, { minFontSize: '50px', maxFontSize: '64px' });
jQuery("h3").fitText(1.5, { minFontSize: '30px', maxFontSize: '48px' });
