// ND Logo Transition Effect

function transitionIn() {
  $('.nd').transition({
    y: '-5px',
    scale: .85
  });
  $('.text7').fadeIn(1000);
}

function transitionOut() {
  $('.nd').transition({
    y: '0px',
    scale: 1
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