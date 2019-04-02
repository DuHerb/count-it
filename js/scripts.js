$(document).ready(function()  {
  $("#inputSubmit").click(function()  {
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    // console.log(countTo);
    // console.log(countBy);
    var outputCount = countIt(countTo,countBy);
    // console.log(outputCount);
  })
  function countIt(countTo,countBy){
    var outputCount = [];
    if(countBy <= countTo && countBy > 0 && countTo > 0){
      for (i = countBy; i <= countTo; i+= countBy){
      outputCount.push(i);
      console.log(outputCount);
      };
      return outputCount;
    }else{alert("Numbers must be greater than 0, and Count To must be larger than Count By.")}
  };
// Start of Wordpuzzle logic
function deVowel(list){
  var vowels = ['a','e','i','o','u','A','E','I',"O",'U'];

  vowels.forEach(function(vowel){
    for (var i = 0; i < list.length; i++){
      if (vowel === list[i]){
        list.splice(i,1, "-");
      };
    };
  });
  return list;
  };
  var testArray = ['t','g','a','b','e'];
  // console.log(deVowel(testArray));

  $('#puzzleSubmit').click(function() {
    var userInput = $('#puzzleInput').val();
    var inputSplit = userInput.split('');
    console.log(inputSplit);
    $('#puzzleOutPut').append(deVowel(inputSplit));
  })
//Start of TransportationQuiz

  $("#quizSubmit").click(function() {
    $("input:checkbox[name=work]:checked").each(function(){
      var workMode = $(this).val();
      $("#quizResults").append("<li>" + workMode + "</li>");
      $("#quizResults").append("<br>");
    });
    $("input:checkbox[name=notWork]:checked").each(function(){
      var notWorkMode = $(this).val();
      $("#quizResults").append("<li>" + notWorkMode + "</li>");
    });
    $("form").hide();
  });

  //Start of Fortune =------------------------------------------------
  var allLuck = "Look at the Golden Horeseshoes on this Guy! You're the luckiest sum' bitch I ever seen!<br />";
  var noLuck = "Don't look up.  There's probably a rock from space hurtling towards your face.<br />";
  var littleLuck = "Look on the bright side, things can only get better from here.<br />"
  var mostlyLuck = "Start playing the lotto.  Two dollar payouts gauranteed.  Sometimes.<br />"
  var wholeLottaLuck = "That levy is never gonna break. All the lemons you can squeeze.<br />"

  $('#fortuneSubmit').click(function(){
    var luckIndex = 0;

    if ($('#gizmo').is(":checked")){
      $('#fortuneOutput').append("You have adopted Gizmo and unwittingly unleashed Gremlins and destroyed your family's home.  Way to go.");
    } else {
      $('input:checkbox[name=fortune]:checked').each(function(){
        luckIndex += parseInt($(this).val());
        console.log(luckIndex);
      });
    if (luckIndex === -6) {
          $('#fortuneOutput').append(noLuck);
      } else if (luckIndex <= -3 ){
        $('#fortuneOutput').append(littleLuck);
      } else if (luckIndex <= 2 ) {
        $('#fortuneOutput').append(mostlyLuck);
      } else if (luckIndex < 5){
        $('#fortuneOutput').append(wholeLottaLuck);
      } else {
        $('#fortuneOutput').append(allLuck);
    };
  };
  });

  // var userInput = [2,3,4,5,6,7,8,9,10,11];
  // var prime = 2;
  // var primeNumbers = [];
  // var counter = userInput.length;
  //
  // for (var j = 2; j <= counter-1; j++){
  //   i = 0;
  //   for (var i = 0; i < counter; i++) {
  //     if (Math.floor(array[i] % prime) === (array[i] % prime)){
  //       // primeNumbers.push(userInput[i]);
  //       userInput.splice(counter,1);
  //       counter--;
  //       console.log(userInput);
  //     }
  //
  //   };
  //
  // }

  // var prime = 2;
  // var input = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  // var primeArray = siev(input);
  // console.log(primeArray);
  //
  // function siev(array) {
  //   if (prime > array.length) {
  //     return array;
  //   } else {
  //     for (var i = 0; i < array.length-1; i++) {
  //       if(array[i] % prime === 0 && Math.floor(array[i] % prime) === (array[i] % prime)) {
  //         array.splice(i,1);
  //       };
  //     };
  //     prime++;
  //     return siev(array);
  //   }
  // }

  var prime = 2;
  var input = [2,3,4,5,6,7,8,9,10,11,12,13];

  function siev(input){
    if (prime >= input.length){
      return input.filter(input => typeof input === 'number');
    }
    for (var i = 0; i<input.length; i = i + prime){
      if(typeof input[i] === "number") {
        input[i].toString();
        console.log(input[i]);
      }
      prime++;
      return siev(input);
    }

  }
  console.log(siev(input));

});
