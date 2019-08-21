

// Back-end
var leapYear = function(date) {
    if (date % 4 === 0 && date % 100 !== 0 || (date % 400 === 0)) {
      console.log("leap year");
    }
    else {
      console.log("not a leap year");
    }
}




// user interface logic
$(document).ready(function(){
  $('.form').submit(function(event){
    event.preventDefault();
    var date = parseInt($("input.dateInput").val());
    var result = leapYear(date);

  });
});
