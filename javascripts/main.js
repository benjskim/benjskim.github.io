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

  function transitionIn1() {
    $(this).transition({
      rotate: '10deg',
      y: '-15',
      x: '5',
      duration: 300
    });  
  }

  function transitionOut1() {
    $(this).transition({
      rotate: '8deg',
      y: '0',
      duration: 300
    });  
  }

  $("img[alt='one']").hoverIntent({ 
    over: transitionIn1,
    timeout: 100,
    interval: 100,
    out: transitionOut1
  });


  function transitionIn2() {
    $(this).transition({
      rotate: '-15deg',
      y: '-25',
      x: '-30',
      duration: 300
    });  
  }

  function transitionOut2() {
    $(this).transition({
      rotate: '-8deg',
      y: '0',
      x: '0',
      duration: 300
    });  
  }

  $("img[alt='two']").hoverIntent({ 
    over: transitionIn2,
    timeout: 100,
    interval: 100,
    out: transitionOut2
  });


  function transitionIn3() {
    $(this).transition({
      rotate: '9deg',
      y: '-25',
      x: '15',
      duration: 300
    });  
  }

  function transitionOut3() {
    $(this).transition({
      rotate: '7deg',
      y: '0',
      x: '0',
      duration: 300
    });  
  }

  $("img[alt='three']").hoverIntent({ 
    over: transitionIn3,
    timeout: 100,
    interval: 100,
    out: transitionOut3
  });
  

  function transitionIn4() {
    $(this).transition({
      rotate: '10deg',
      y: '-35',
      x: '5',
      duration: 300
    });  
  }

  function transitionOut4() {
    $(this).transition({
      rotate: '10deg',
      y: '0',
      x: '0',
      duration: 300
    });  
  }

  $("img[alt='four']").hoverIntent({ 
    over: transitionIn4,
    timeout: 100,
    interval: 100,
    out: transitionOut4
  });


  function transitionIn5() {
    $(this).transition({
      rotate: '-15deg',
      y: '-25',
      x: '-20',
      duration: 300
    });  
  }

  function transitionOut5() {
    $(this).transition({
      rotate: '-15deg',
      y: '0',
      x: '0',
      duration: 300
    });  
  }

  $("img[alt='five']").hoverIntent({ 
    over: transitionIn5,
    timeout: 100,
    interval: 100,
    out: transitionOut5
  });
});
  


jQuery("nav").fitText(1.5, { minFontSize: '16px', maxFontSize: '16px' });
jQuery("h1").fitText(1.2, { minFontSize: '60px', maxFontSize: '80px' });
jQuery("h2").fitText(1.2, { minFontSize: '50px', maxFontSize: '64px' });
jQuery("h3").fitText(1.5, { minFontSize: '30px', maxFontSize: '48px' });
jQuery("p").fitText(1.5, { minFontSize: '20px', maxFontSize: '21px' });
