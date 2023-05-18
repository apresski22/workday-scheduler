// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// server side API activity 3 for example

var rootEl = $("#root");

var dateDisplayEl = $("#currentDay");

//create var for each hour element
//var hour9El = $("")

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

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

  //check the current time and add a classs to the parent element
  //use dom traverlas to make the value uf the textarea the saved content
});

$(".saveBtn").on("click", function (event) {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(key, value);
});

//we need the key and whwere is the key?

// $(".saveBtn").on("click", function (saveCurrentProject) {
//   localStorage.setItem("currentProjectInput", input.val());
//   localStorage.getItem("currentProjectInput");
//   console.log(localStorage.getItem("currentProjectInput"));
// });

// can the buttonSaveEl be used for .present-button and .future-button too?
//buttonSaveEl.on("click", ".past-button", savePastProject);
//convert to jquery
//$(".saveBtn").click(savePastProject);

//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// if (currentTime < date) {
//   $("#time-block").css("background", "white");
// if (currentTime > date) {
//   $("#time-block").css("background", "green");
// if (currentTime = date)
//   $("#time-block").css("background", "red");
// }

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.
//});

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

displayDate;

//find out what the interval time means
setInterval(displayDate, 0);

//page displays project content on page load
//readProjectsFromStorage();
console.log("hello");
