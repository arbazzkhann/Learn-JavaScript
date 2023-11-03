//********* JavaScript Automatically Initialized as Number (if number not defined) *****
let num = 400;  
console.log(num);  
console.log(typeof num);  //output => number


//******************* Manually Initialized as a number *******************
let num2 = new Number(100); 
console.log(num2);
console.log(typeof num2);  //output => number


//******************* (.toString) change number to string *******************
let numToSting = num2.toString();  //change Number to String and assign in copied variable
console.log(numToSting); //print copied variable
console.log(typeof(numToSting)); //typeof copied variable => string


//******************* (.toFixed) Function *******************
let balance = new Number(7050.87525);
console.log(balance.toFixed(2)); //it fixed values after decimal


//******************* (.toPrecision) Function *******************
const otherNumber = new Number(123.4539);

console.log(otherNumber.toPrecision(2))  //only print 2 digits from left
console.log(otherNumber.toPrecision(3))  //only print 3 digits from left
console.log(otherNumber.toPrecision(5))  //only print 4 digits from left


//******************* (.toLocaleString) Function *******************
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const digits = new Number(10000000);

console.log(digits.toLocaleString('en-US'));  //Print number as follows on US Standards
console.log(digits.toLocaleString('en-IN')); //Print Number as Indian Standards

// For More MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString


