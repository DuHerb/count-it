$(document).ready(function()  {
  $("#inputSubmit").click(function()  {
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    // console.log(countTo);
    // console.log(countBy);
    var outputCount = countIt(countTo,countBy);
    console.log(outputCount);
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
console.log(deVowel(testArray));

  $('#puzzleSubmit').click(function() {
    var userInput = $('#puzzleInput').val();
    var inputSplit = userInput.split('');
    console.log(inputSplit);
    $('#puzzleOutPut').append(deVowel(inputSplit));

  })
})
