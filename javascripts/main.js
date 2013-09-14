//Box-7 ND Logo Transition Effect
function transitionIn() {
  $('.nd').transition({
    y: '5%',
    scale: .75,
    duration: 500
  });
  $('.text7').fadeIn(750);
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
    x: '0%',
    duration: 300
  }).fadeOut(500);
  $('.modal-about').fadeIn(400).transition({
    x: '95%',
    duration: 300
  });
});

$('.closebutton').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);
});  

$('.modaltestimonials').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);
  $('.modal-testimonials').fadeIn(400).transition({
    x: '95%',
    duration: 300
  });
});

$('.closebutton').click(function() {
  $('.simple-modal').transition({
    x: '0%',
    duration: 300
  }).fadeOut(500);
});  