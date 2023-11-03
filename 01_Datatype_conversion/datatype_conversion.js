/************************ Converting datatype to "Number" ***********************/
let a = "6";

let b = Number(a);  //converting datatype to number

console.log(a);  //original value => 6
console.log(b);  //original value => 6

console.log(typeof(a));  //original output => string
console.log(typeof(b));  //converted output => number


/************************ Converting datatype to "String" ***********************/
let num = null;

let convertedToString = String(num);

console.log(num); //original value => 87
console.log(convertedToString); //converted value => 87

console.log(typeof(num));  //original datatype  => number
console.log(typeof(convertedToString)); //converted datatype  => string


/************************ Converting datatype to "Boolean" ***********************/
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn);
console.log(booleanIsLoggedIn);


/************************ Converting datatype to "" ***********************/
