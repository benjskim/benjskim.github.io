$(document).ready(function(){

  //---Background Scroll---//
  var $window = $(window);
  $('body').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos   = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
      });
    });
  
  var $window = $(window);
  $('.ndbackground').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos   = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '100% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });
  });

  //---Testimonials Slider---//
  var sliderUL = $('.slider').css('overflow', 'hidden').children('ul'),
    quotes = sliderUL.find('.quote'),
    quoteWid = 600, // can't use quotes[0].width for some reason
    quotesLen = quotes.length,
    current = 1,
    totalQuotesWid = quoteWid * quotesLen;

  $('.slider-nav').show().find('a').on('click', function() {
    var direction = $(this).data('dir'),
      loc = quoteWid; // 600

    ( direction === 'next' ) ? ++current : --current;

    if ( current === 0 ) {
      current = quotesLen;
      loc = totalQuotesWid - quoteWid;
      direction = 'next';
    } else if (current - 1 === quotesLen) {
      current = 1;
      loc = 0;
    }

    transition(sliderUL, loc, direction);
  });

  function transition(container, loc, direction ) {
    var unit;
    if (direction && loc !== 0) {
      unit = (direction === 'next') ? '-=' : '+=';
    }

    container.animate({
      'margin-left': unit ? (unit + loc) : loc
    });
  }

});

//---Box-7 ND Logo Transition Effect---//
function transitionIn() {
  $('.nd').transition({
    y: '5%',
    scale: .75,
    duration: 500
  });

  $('.text7').delay(500).fadeIn(750);
}

function transitionOut() {
  $('.nd').transition({
    y: '0px',
    scale: 1,
    duration: 600
  });  

  $('.text7').fadeOut(500);
}

$('.box-7').hoverIntent({ 
  over: transitionIn,
  timeout: 200,
  interval: 200,
  // out: transitionOut
});

//Menu Modal
$('.modalabout').click(function() {
  $('.simple-modal').transition({
    x:  '0%',
    duration:  300
  }).fadeOut(500);

  $('.modal-about').fadeIn(400).transition({
    x: '93%',
    duration: 300
  });
});

$('.modalresume').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);

  $('.modal-resume').fadeIn(400).transition({
    x: '93%',
    duration: 300
  });
});

$('.modaltestimonials').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);

  $('.modal-testimonials').fadeIn(400).transition({
    x: '93%',
    duration: 300
  });
});

$('.closebutton').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);
});  