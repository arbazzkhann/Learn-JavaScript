//Notes question
/*
54523
*/
let number = Number(prompt("Enter Number"));

let tempNum = 0;
let fiveHundred = 0;
let twoHundred = 0;
let hundred = 0;
let fifty = 0;
let twenty = 0;
let ten = 0;
let one = 0;

if(isNaN(number) === NaN) {
    console.log("Wrong input.");
}

if(number >= 500) {
    fiveHundred = number / 500;
    number = number % 500;
}
if(number >= 200 && number < 500) {
    twoHundred = number / 200;
    number = number % 200;
}
if(number >= 100 && number < 200) {
    hundred = number / 100;
    number = number % 100;
}
if(number >= 50 && number < 100) {
    fifty = number / 50;
    number = number % 50;
}
if(number >= 20 && number < 50) {
    twenty = number / 20;
    number = number % 20;
}
if(number >= 10 && number < 20) {
    ten = number / 10;
    number = number % 10;
}
if(number >= 1 && number < 10) {
    one = number / 1;
    number = number % 1;
}

console.log("Number of 500: " + Math.trunc(fiveHundred));
console.log("Number of 200: " + Math.trunc(twoHundred));
console.log("Number of 100: " + Math.trunc(hundred));
console.log("Number of 50: " + Math.trunc(fifty));
console.log("Number of 20: " + Math.trunc(twenty));
console.log("Number of 10: " + Math.trunc(ten));
console.log("Number of 1: " + Math.trunc(one));