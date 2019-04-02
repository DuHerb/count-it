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
})
