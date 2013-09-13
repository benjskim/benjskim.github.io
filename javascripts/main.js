// ND Logo Transition Effect

function transitionIn() {
  $('.text7').fadeIn(1000);
  $('.nd').transition({
    y: '0',
    scale: .85,
    duration: 600
  });
  
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
  out: transitionOut
});

// End ND Logo Transition