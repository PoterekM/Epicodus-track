var userValue = function(question1, question2, question3, question4) {
  return question1 + question2 + question3 + question4;
};

console.log("boop");



$(document).ready(function(){
  $("#radioForm").submit(function(){
    event.preventDefault();
    console.log("boop");
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    console.log(question1);
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    console.log(question2);
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    console.log(question3);
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    console.log(question4);
    alert(userValue(question1, question2, question3, question4));

    var result;
    if (userValue <= 4) {
      result = alert("CSharp");
    } else if (userValue <=8) {
      result = alert("JavaScript");
    } else if (userValue <= 12) {
      result = alert("Ruby");
    }
    console.log(result);
    $("#trackResult").text(result);
  });

});
