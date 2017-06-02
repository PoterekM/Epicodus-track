$(document).ready(function(){
  $("#radioForm").submit(function(){
    event.preventDefault();
    console.log("boop");
    var question1 = $("input:radio[name=question1]:checked").val();
    console.log(question1);
  });

});
