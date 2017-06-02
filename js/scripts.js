$(document).ready(function(){
  $("#radioForm").submit(function(){
    event.preventDefault();
    console.log("boop");
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    console.log(question1);
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    console.log(question2);
  });

});
