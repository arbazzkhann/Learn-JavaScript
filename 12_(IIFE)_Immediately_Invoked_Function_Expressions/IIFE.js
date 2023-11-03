//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/GAIbn16Iytc

/***************************** IIFE *******************************/
//IIFE stands for Immediately Invoked Function Expressions
//IIFE is for immediately calling function

/*
Syntax:  ('function(){ 
        
        }') ('function calling and arguments');
*/

/******************************************************************/

//IIFE for print hello world
(function ww() {
    console.log("hello world");
})();


//IIFE for print sum
(function ww(num1, num2) {
    console.log(num1 + num2);
})(5,6);


//print square of 2 with arrow function
const sqr = ((num) => {
    console.log(2 ** num);
})(5);


//print multiple of two numbers with arrow function
( (num1, num2) => {
    console.log(num1 * num2);
} ) (2,7);