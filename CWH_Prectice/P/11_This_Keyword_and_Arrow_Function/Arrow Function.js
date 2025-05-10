

//YouTube Channel : https://youtu.be/9ksqBa8_txM
//Video Link : https://youtu.be/9ksqBa8_txM

/******************************************************************************/
/********************************* Arrow Function ******************************/
/*
Syntax :   1.   () => expression

           2.   param => expression

           3.   (param) => expression

           4.   (param1, paramN) => expression

           5.   () => {
                statements
                }

           6.   param => {
                statements
                }

           7.   (param1, paramN) => {
                statements
                }
*/
/*
Basic Syntax: 
                   1. (parameters) => {}
                   
                   2. const var_name = (parameters) {
                            .....code.....
                   }

*/


/************************* return sum **************************/
const sum = (num1, num2) => {
    return console.log(num1 + num2);  
}

console.log(sum(5, 10));  //output => 15


/************************* Implicit return **************************/
//implicit return : (no curly braces and no return use) // (code will be in single line)

const sum2 = (num1, num2) => num1 + num2  //implicit 

console.log(sum2(10,5));
