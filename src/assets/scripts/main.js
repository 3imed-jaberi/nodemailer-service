$(document).ready(function(){

  // some interactive when display the result .. 
  $('#result').show();
  $('#next').hide();

  setTimeout(function(){
          $('#result').hide();
          $('#next').show();
  },2000);

  // hide the error when is in show status .. 
  if ($('#err').show){
      setTimeout(function(){
          $('#err').hide();
      },2000);
  }
});