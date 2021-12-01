// Assignment #1
console.log("This assignment is for Ryan. He needs to determine his age in seconds using JavaScript variables")
// Seconds in an Hour
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;

console.log(secondsInAnHour);

// Seconds in a Day
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;

// Seconds in a Year
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;

// Age in Seconds
var age = 11;
console.log("My age in seconds is...");
console.log(age * secondsInAYear);
