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
  if (answer3 === 'php') {
    $('#survey4').hide();
  } else if (answer3 === 'general') {
    $('#survey4').show();
  }
  });

  $('button#submit_info').click(function(){
    var surname = $('input#last_name').val();
    var gender_mod = $('input:radio[name=gender]:checked').val();
    var answer1 = $('input:radio[name=survey1]:checked').val();
    var answer2 = $('input:radio[name=survey2]:checked').val();
    var answer3 = $('input:radio[name=survey3]:checked').val();
    var answer4 = $('input:radio[name=survey4]:checked').val();

    $('h5#greet').show();
    $('h5#greet').text(
      "Hi " + gender_mod + " " + surname +". We so appreciate your taking the time to fill out our brief survey."
    );


    if ((answer1 === 'small') && (answer2 === 'css')) {
      $('p#synopsis').text(
        "We feel like you would be a really great fit for our CSS track. Front-end development speciality is always in demand and the sleek styling you could give a client would be much appreciated in your future endeavors."
      );
    } else if ((answer1 === 'small') && (answer2 === 'ruby')) {
      $('p#synopsis').text(
        "It sounds like the path of the 'indie dev' with an exciting startup might be for you. Perhaps its even your startup. Regardless, Ruby might be the perfect path for your particular set of skills."
      );
    } else if ((answer1 === 'big') && (answer3 === 'php')) {
      $('p#synopsis').text(
        "So it seems like you would flourish creating & streamlining the larger websites we now see for major organizations today. PHP is the language these institutions & business' need to manage their content-heavy websites."
      );
    } else if ((answer3 === 'general') && (answer4 === 'windows')) {
      $('p#synopsis').text(
        "One of the most popular languages among enterprise-level businesses that rely on Windows based software is C#. If you like the idea of working for a larger company on business software, C# is a great choice."
      );
    }
    else if (answer4 === 'open') {
      $('p#synopsis').text(
        "Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages. If you prefer the open source format and dont need to worry about the .NET framework and moreso Android maybe Java is the way forward for you."
      );
    }


  });// Submit button

  $('button#reset').click(function(){
    $('input').prop('checked', false);
    $('#inquiry').val('');
    $('#first_name').val('');
    $('#last_name').val('');
    $('#greet').text('');
    $('#synopsis').text('');
    $('div#survey2').hide();
    $('div#survey3').hide();
    $('div#survey4').hide();
  })





});
