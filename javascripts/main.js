//---Background Scroll---//
$(document).ready(function(){
  
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
      var coords = '150% '+ yPos + 'px';

      $bgobj.css({ backgroundPosition: coords });
    });
  });

  $('#slider').leanSlider();
});

// $(window).scroll(function() {
//     var windowY = $(window).height();
//     var scrolledY = $(window).scrollTop();
//     var image_url = '../images/skyline.jpg';

//     if (scrolledY > windowY) {
//         image_url = '../images/work.png';
//         }

//     $('body').css('background', "url(" + image_url + ")");
// });

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