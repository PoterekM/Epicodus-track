var add = function(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
};


$(document).ready(function(){
  $("#radioForm").submit(function(event){
    event.preventDefault();
    $(".initialShow").hide();
    $(".trackResult").hide();
    $("#radioForm").hide();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var userValue = add(question1, question2, question3, question4, question5);

    if (userValue <= 6 || userValue <10) {
      $("#cSharp").show();
    } else if (userValue <= 10 || userValue <13) {
      $("#java").show();
    } else if (userValue <= 15) {
      $("#ruby").show();
    }
    $("#trackResult").show(userValue);

  });

});
