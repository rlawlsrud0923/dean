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

});
