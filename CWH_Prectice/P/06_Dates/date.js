//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/tGLCuoumaGY

//Dates are begining of January 1, 1970, UTC



const dt = new Date();

console.log(dt);   //output => 2023-10-12T03:41:29.784Z (else Today's Date)
console.log(dt.toString()); //output => Thu Oct 12 2023 09:12:07 GMT+0530 (India Standard Time)
console.log(dt.toDateString()); //output => Thu Oct 12 2023
console.log(dt.toLocaleString()); //output => 10/12/2023, 9:12:07 AM
console.log(dt.getTime()); //output => 1697082127029  //which is milliseconds
console.log(Date()); //output => Thu Oct 12 2023 09:12:07 GMT+0530 (India Standard Time)

//All the Values of Time can be Vary on (today's) date.

/************************** Creating Customized Date **************************/
//Date(Year, Month, Day, Hour, Minutes, Mili Secs)
//Month Started with 0 to 11
let myCreatedDate = new Date(2023, 11, 25, 11, 12, 53, 542);
console.log(myCreatedDate);  //output => 2023-12-25T05:42:53.542Z


console.log(myCreatedDate.toDateString());  //output => Mon Dec 25 2023
console.log(myCreatedDate.toString());  //output => Mon Dec 25 2023 11:12:53 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString());  //output => 12/25/2023, 11:12:53 AM
console.log(myCreatedDate.toLocaleDateString());  //output => 12/25/2023

let myCustomDate = new Date("2023-01-15");
console.log(myCustomDate.toLocaleString()); //output => 1/15/2023, 5:30:00 AM

let myNextDate = new Date("12-01-2023");
console.log(myNextDate.toLocaleString()); //output => 12/1/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //output => 1697085223667
console.log(myTimeStamp.toLocaleString("en-IN")); //output => 16,97,08,52,23,667

/************************** Converting Miliseconds to Seconds **************************/
console.log(Math.floor((Date.now()) / 1000)); 


/************************** Getting Single Values ***************************/
let newDate = new Date();
console.log(newDate.getFullYear());  //Year
console.log(newDate.getMonth() + 1);  //Month   //+1 because Month is Started 0 to 11
console.log(newDate.getDay());  //Day
console.log(newDate.getHours());  //Hours
console.log(newDate.getMinutes());  //Minutes
console.log(newDate.getSeconds());  //Minutes
console.log(newDate.getMilliseconds()); //MilliSeconds




/************************** Concatinating Date for Our Readability ***************************/
let midTime = new Date();

let finalTime = (`Year is ${midTime.getFullYear()}, Month is ${midTime.getMonth()+1}, Day is ${midTime.getDay()}, Hours is ${midTime.getHours()}, Minutes is ${midTime.getMinutes()}, Seconds is ${midTime.getSeconds()}, Milliseconds is ${midTime.getMilliseconds()}.`);
console.log(finalTime);


/************************** Difining Date as User Want ***************************/
/*

Syntax: date.toLocaleString('internationalization', {
    OBJECTs.........
})

 */

let dDate = new Date(12,0,15,12,35,46);

let fDate = dDate.toLocaleString('default', {
    year: "2-digit", // printed Year
    month: "long",  // printed Month
    weekday: "long",  // printed WeekDay
    day: "numeric"  // printed Day
})

console.log(fDate);