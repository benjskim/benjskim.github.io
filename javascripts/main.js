// ND Logo Transition Effect

function transitionIn() {
  $(this).transition({
    y: '-30px',
    scale: .75
  });
}

function transitionOut() {
  $(this).transition({
    y: '0px',
    scale: 1
  });
}


$('.box-7').hoverIntent({ 
  over: transitionIn,
  timeout: 200,
  interval: 200,
  out: transitionOut,
  selector:'img'
});

// End ND Logo Transition