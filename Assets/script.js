var rootEl = $("#root");
var dateDisplayEl = $("#currentDay");
var timeBlockEl = $(".time-block");

// keep project description displayed after page reload
var parent = $("#description").each(function () {
  var key = $(this).attr("id");
  var saved = localStorage.getItem(key);
  console.log(saved);
});
console.log(parent);

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

//iterate function for future.$H until hour-17
if (present.$H > hourArray.hour9) {
  $("#hour-9").css("background-color", "purple");
} else if (present.$H < hourArray.hour9) {
  $("#hour-9").css("background-color", "#77dd77");
} else $("#hour-9").css("background-color", "white");

if (present.$H > hourArray.hour10) {
  $("#hour-10").css("background-color", "purple");
} else if (present.$H < hourArray.hour10) {
  $("#hour-10").css("background-color", "#77dd77");
} else $("#hour-10").css("background-color", "white");

if (present.$H > hourArray.hour11) {
  $("#hour-11").css("background-color", "purple");
} else if (present.$H < hourArray.hour11) {
  $("#hour-11").css("background-color", "#77dd77");
} else $("#hour-11").css("background-color", "white");

if (present.$H > hourArray.hour12) {
  $("#hour-12").css("background-color", "purple");
} else if (present.$H < hourArray.hour12) {
  $("#hour-12").css("background-color", "#77dd77");
} else $("#hour-12").css("background-color", "white");

if (present.$H > hourArray.hour13) {
  $("#hour-13").css("background-color", "purple");
} else if (present.$H < hourArray.hour13) {
  $("#hour-13").css("background-color", "#77dd77");
} else $("#hour-13").css("background-color", "white");

if (present.$H > hourArray.hour14) {
  $("#hour-14").css("background-color", "purple");
} else if (present.$H < hourArray.hour14) {
  $("#hour-14").css("background-color", "#77dd77");
} else $("#hour-14").css("background-color", "white");

if (present.$H > hourArray.hour15) {
  $("#hour-15").css("background-color", "purple");
} else if (present.$H < hourArray.hour13) {
  $("#hour-15").css("background-color", "#77dd77");
} else $("#hour-15").css("background-color", "white");

if (present.$H > hourArray.hour16) {
  $("#hour-16").css("background-color", "purple");
} else if (present.$H < hourArray.hour13) {
  $("#hour-16").css("background-color", "#77dd77");
} else $("#hour-16").css("background-color", "white");

if (present.$H > hourArray.hour17) {
  $("#hour-17").css("background-color", "purple");
} else if (present.$H < hourArray.hour17) {
  $("#hour-17").css("background-color", "#77dd77");
} else $("#hour-17").css("background-color", "white");

displayDate;

//find out what the interval time means
setInterval(displayDate, 0);

//page displays project content on page load
//readProjectsFromStorage();
