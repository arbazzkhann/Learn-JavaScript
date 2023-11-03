//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/9MfwYoWKKVE

/***************************************************************************/
/************************** (.reduce) Function *****************************/
/*
Syntax: 
    .reduce(callback_function(accumulator, current_value) {
        ----code----
    }, accumulator_initial_value)
*/

let myArr = [1, 2, 3];

let newNum = myArr.reduce((acc, currval) => {
    console.log(`accumulator : ${acc} and current value : ${currval}`);
    return acc + currval;
}, 0);

console.log("final Result : ", newNum);



//**** with simple arrow function ****
let numArr = [1, 2, 3];

let reduceNum = numArr.reduce((acc, currval) => (acc + currval), 0);

console.log("final Result : ", reduceNum);


/************************** (.reduce) Prectice *****************************/
/*
Ques: create a array with object keys are 1st course name and 2nd is price.
      then use reduce function and find total price of cources.
*/


const course = [ 
    {
        name: "js",
        price: 2999
    },
    {
        name: "cpp",
        price: 2499
    },
    {
        name: "C",
        price: 1599
    },
    {
        name: "python",
        price: 1799
    },
    {
        name: "ruby",
        price: 2199
    },
    {
        name: "c#",
        price: 3599
    }
]

const finalPrice = course.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.price;
}, 0);

console.log(finalPrice);

