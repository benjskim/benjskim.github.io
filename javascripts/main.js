//Box-7 ND Logo Transition Effect
function transitionIn() {
  $('.nd').transition({
    y: '7.5px',
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
$(".simple-modal").addEvent("click", function(){
  var SM = new SimpleModal({"btn_ok":"Confirm button"});
      SM.addButton("Action button", "btn primary", function(){
        alert("Add your code");
        this.hide();
      });
      SM.addButton("Cancel", "btn");
      SM.show({
        "model":"modalabout",
        "title":"About",
        "contents":"Your message..."
      }); 
});