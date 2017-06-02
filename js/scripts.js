var userValue = function(question1, question2) {
  return question1 + question2;
};







$(document).ready(function(){
  $("#radioForm").submit(function(){
    event.preventDefault();
    console.log("boop");
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    console.log(question1);
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    console.log(question2);
    // var question3 = parseInt($("input:radio[name=question3]:checked").val());
    // console.log(question3);
    alert(userValue(question1, question2));
  });

});
