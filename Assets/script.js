var rootEl = $("#root");
var dateDisplayEl = $("#currentDay");
var timeBlockEl = $(".time-block");

//identify element where project text will appear

// Delegate event listener to the parent element, <div id="buttons">

// for all projects, identify all <textarea> elements with class="description"
//var projectDisplay = $("textarea.description");
var parent = $(".time-block, .row").each(function () {
  var key = $(this).attr("id");
  var saved = localStorage.getItem(key);
  console.log(saved);

  //check the current time and add a classs to the parent element
  //use dom traverlas to make the value uf the textarea the saved content
});
console.log(parent);

// var parent = $(".time-block, .row").each(function () {
//   var key = $(this).attr("id");
//   var saved = localStorage.getItem(key);
//   console.log(saved);

//   //check the current time and add a classs to the parent element
//   //use dom traverlas to make the value uf the textarea the saved content
// });

// keep project description displayed after page reload
var parent = $("#description").each(function () {
  var key = $(this).attr("id");
  var saved = localStorage.getItem(key);
  console.log(saved);
});

$(".saveBtn").on("click", function (event) {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(key, value);
});

function displayDate() {
  //event.preventDefault();
  var date = dayjs().format("MMMM D YYYY, h:mm:ss a");
  dateDisplayEl.text(date);
}

var present = dayjs();
var future = present.add(1, "h");
var past = present.subtract(1, "h");
console.log(future);
console.log(past);
console.log(present);
console.log(future.$H);

var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");

var hourArray = {
  hour9: 9,
  hour10: 10,
  hour11: 11,
  hour12: 12,
  hour13: 13,
  hour14: 14,
  hour15: 15,
  hour16: 16,
  hour17: 17,
};

console.log(hourArray.hour9);
console.log();

// hourArray.forEach(getHours);
// function getHours(value) {
//   console.log(value);
// }
if (future.$H > hourArray.hour9) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour9) {
  $(".time-block").css("background-color", "purple");
}

if (future.$H > hourArray.hour10) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour10) {
  $(".time-block").css("background-color", "purple");
}

if (future.$H > hourArray.hour11) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour11) {
  $(".time-block").css("background-color", "purple");
} 
if (future.$H > hourArray.hour12) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour12) {
  $(".time-block").css("background-color", "purple");
} 

if (future.$H > hourArray.hour13) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour13) {
  $(".time-block").css("background-color", "purple");
} 

if (future.$H > hourArray.hour14) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour14) {
  $(".time-block").css("background-color", "purple");
} 

if (future.$H > hourArray.hour15) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour15) {
  $(".time-block").css("background-color", "purple");
} 


if (future.$H > hourArray.hour16) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour16) {
  $(".time-block").css("background-color", "purple");
}

if (future.$H > hourArray.hour17) {
  //iterate function for future.$H until hour-17
  $(".time-block").css("background-color", "#77dd77");
} else (past.$H > hourArray.hour17) {
  $(".time-block").css("background-color", "purple");
}
displayDate;

//find out what the interval time means
setInterval(displayDate, 0);

//page displays project content on page load
//readProjectsFromStorage();
