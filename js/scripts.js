$(document).ready(function(){

  $('#survey1').change(function(){
  var answer1 = $('input:radio[name=survey1]:checked').val();
  if (answer1 === 'small') {
    $('#survey2').show();
    $('#survey3').hide();
  } else if (answer1 === 'big') {
    $('#survey3').show();
    $('#survey2').hide();
  }
  });

  $('#survey3').change(function(){
  var answer3 = $('input:radio[name=survey3]:checked').val();
  console.log(answer3);
  if (answer3 === 'php') {
    $('').show();
  } else if (answer3 === 'general') {
    $('#survey4').show();
  }
  });
});
