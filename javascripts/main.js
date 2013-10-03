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

  $("img[alt='one']").on("mouseover", function() {
    $(this).transition({
      rotate: '10deg',
      y: '-15'
    });
  });

  $("img[alt='one']").on("mouseleave", function() {
    $(this).transition({
      rotate: '8deg',
      y: '0'
    });
  });

  $("img[alt='two']").on("mouseover", function() {
    $(this).transition({
      rotate: '-10deg',
      y: '-25',
      x: '-10'
    });
  });

  $("img[alt='two']").on("mouseleave", function() {
    $(this).transition({
      rotate: '-8deg',
      y: '0',
      x: '0'
    });
  });

  $("img[alt='three']").on("mouseover", function() {
    $(this).transition({
      rotate: '9deg',
      y: '-25',
      x: '15'
    });
  });

  $("img[alt='three']").on("mouseleave", function() {
    $(this).transition({
      rotate: '7deg',
      y: '0',
      x: '0'
    });
  });

  $("img[alt='four']").on("mouseover", function() {
    $(this).transition({
      rotate: '2deg',
      y: '-35',
      x: '-10'
    });
  });

  $("img[alt='four']").on("mouseleave", function() {
    $(this).transition({
      rotate: '10deg',
      y: '0',
      x: '0'
    });
  });

  $("img[alt='five']").on("mouseover", function() {
    $(this).transition({
      rotate: '-15deg',
      y: '-15',
      x: '-20'
    });
  });

  $("img[alt='five']").on("mouseleave", function() {
    $(this).transition({
      rotate: '-15deg',
      y: '0',
      x: '0'
    });
  });



});


jQuery("nav").fitText(1.5, { minFontSize: '16px', maxFontSize: '16px' });
jQuery("h1").fitText(1.2, { minFontSize: '60px', maxFontSize: '80px' });
jQuery("h2").fitText(1.2, { minFontSize: '50px', maxFontSize: '64px' });
jQuery("h3").fitText(1.5, { minFontSize: '30px', maxFontSize: '48px' });
jQuery("p").fitText(1.5, { minFontSize: '20px', maxFontSize: '21px' });
