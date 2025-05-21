// This is for displaying the todays date
let d = Date();
document.write('The today"s date is: '+d +"<br>");

// This is one of the way to write date
// document.write("The today's date is: " +Date());
// Getting the Full year ..
// document.write("The current year is: "+d.getFullYear());
const dd = new Date();
document.write("The current year is: " + dd.getFullYear()+ "<br>");
document.write("The current month is: "+ dd.getMonth()+ "<br>");
// Getting the current day !
document.write("The current date is: "+dd.getDay() +"<br>")
// This is the array of the months for having all the months
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// For finding the correct month.....
let month = months[dd.getMonth()];

document.write("The current day is: "+month+"<br>");
// Displaying the current time from calling the function
document.write("The current time is: "+dd.getTime()+"<br>");
// Fetchingn the current hour passed
document.write("The current no of hours passed is "+dd.getHours()+"<br>");
// The number of minutes passed
document.write("The no of minutes passed is: "+dd.getMinutes()+"<br>");
// creating one more array
let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let weekday = week[dd.getDay()];
document.write("The current day is: "+weekday+"<br>");
// Displaying the number of minutes passed
document.write("The number of minute passed: "+dd.getMinutes()+"<br>");
// Displaying the number of seconds passed
document.write("The number of seconds passed: "+dd.getSeconds()+"<br>");