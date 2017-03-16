$( document ).ready( function() {

  //player toggle
  var toggle=true;
  $( "#plus" ).click(function(){
    if( toggle == true) //보이게
    {
      $( "#player_wrap" ).animate( {bottom: '-100px'},"fast");
      toggle = false;
    }
    else { //안보이게
      $( "#player_wrap" ).animate( {bottom: '-171px'},"fast");
      toggle = true;
    }
  });

  var playing = $("#play").play();
  $(playing)

  $("#pause,#load").css("display","none");

});

function play(){
  var play = document.getElementById('players');
  play.play();
  if(play==visi).style.display="none";
}

function load(){
  var pause = document.getElementById('players');
  load.load();
}

function pause(){
  var pause = document.getElementById('players');
  pause.pause();
}
