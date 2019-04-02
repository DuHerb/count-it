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
    for (i = countBy; i <= countTo; i+= countBy){
      outputCount.push(i);
      console.log(outputCount);
    };
    return outputCount;
  };
})
