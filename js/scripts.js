var add = function(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};




$(document).ready(function(){
  $("#radioForm").submit(function(){
    event.preventDefault();
    $(".remove").removeClass("p");
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var userValue = add(question1, question2, question3, question4, question5);

    if (userValue <= 5) {
      // $(".remove").removeClass();
      $("#cSharp").show();
      $("#initialShow").hide();
    } else if (userValue <= 10) {
      // $(".remove").removeClass("p");
      $("#java").show();
      $("#initialShow").hide();
    } else if (userValue <= 15) {
      // $(".remove").removeClass("p");
      $("#ruby").show();
      $("#initialShow").hide();
    }
    // $("p").show(".remove");
    $("#trackResult").show(userValue);

  });

});
