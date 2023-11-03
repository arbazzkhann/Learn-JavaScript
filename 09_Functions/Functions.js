//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/Bn56WahG_t0

/*******************************************************************/
/**************************** Functions ****************************/
/*******************************************************************/
/******* Return print sum of two Numbers ******/
function sum (a, b) {
    return a+b;
}

let x = 5;
let y = 7;

console.log(sum(x,y));  //output => 12



/******* Return print sum of two Numbers ******/
function loggedIn(username) {
    return `${username} jused logged-in`
}

const username = "arbaz";

const signin = loggedIn(username);

console.log(signin);



/*************** Rest Operator **************/
//Rest Operator converts arguments into Array

/*
Syntax:     function f(a, b, ...theArgs) {
                ---code/---
            }
*/

function cartPriceCalculate(...num) {
    let sum = 0;

    for (let i = 0; i < 5; i++) {
        sum = (sum+num[i]);
    }
    return sum;
}

let result = cartPriceCalculate(500, 400, 350, 725, 300);

console.log(`total price is ${result}`)


/***********************************************************/
/*************** Passing Object as Parameters **************/
/***********************************************************/
//Creating an Object
const course = {
    courseName: "Java Script",
    price: "999",
    year: "2023"
}


//Creating Function
function handleObject(anyObject) {
    console.log(`On Year ${anyObject.year}, your course is ${anyObject.courseName} and price is ${anyObject.price}.`)
}

//(Method 1)
//Calling Function
handleObject(course);

//(Method 2)
//passing directly object in arguments
// handleObject({
//     courseName: "C++",
//     price: "599",
//     year: "2023"
// })


/**********************************************************/
/************** Passing Arrays as Parameters **************/
/**********************************************************/

//Ques. Create a Function that Accepts array and return 2nd Index value of array

//creating array
let myArr = [125, 120, 100, 130, 160];

//creating function
function myFunc (anyArray) {
    return anyArray[2];
}

//calling function
//(method 1)
let valueOf2ndIndex = myFunc(myArr);
console.log(valueOf2ndIndex);

//(method 2)
//Passing Array directly in Arguments
// console.log(myFunc([22,24,54,55,66,78]));

