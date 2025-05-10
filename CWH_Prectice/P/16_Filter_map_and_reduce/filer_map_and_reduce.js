//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/9MfwYoWKKVE

/*
Callback Function : A callback is a function passed as an argument to another function.
*/


/******************************************************************/
/************************** (.filter) with Array *************************/
// filter is returning the values.
// but foreach not return any value therefore we use filter.

/*

Syntax: array.filer(callback_function {
    code with conditions
})

*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((item) => item % 2 == 0);   //returning value to newNums

console.log(newNums);  //print new newNums


const emptyNums = myNums.filter((item) => {
    item > 4
});

console.log(emptyNums);
//it will give you empty array because your code is under the curly braces '{}' or scope. 
//so you need to return manually.

const finalNums = myNums.filter((item) => {
    const num = item > 4
    return num //return value
});

console.log(finalNums);


/******* filtering with (foreach) loop *******/


let my00ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

my00ar.forEach((i) => {
    if (i > 6) {
        console.log(i);
    }
})


/************************** Prectice (.filter) with Array Object *************************/
const myClass = [
    { id: 101, class: "10th", subject: "hindi"},
    { id: 102, class: "8th", subject: "maths"},
    { id: 103, class: "8th", subject: "science"},
    { id: 104, class: "9th", subject: "maths"},
    { id: 105, class: "10th", subject: "science"},
    { id: 106, class: "10th", subject: "maths"},
    { id: 107, class: "9th", subject: "maths"},
    { id: 108, class: "8th", subject: "science"},
    { id: 109, class: "10th", subject: "science"},
    { id: 110, class: "9th", subject: "maths"}
]

//print class 10th students
let ffArray = myClass.filter(function(i) {
    return i.class === "10th";
})

console.log(ffArray);


/****Same With outer function****/
function myNewFunc(item) {
    return item.subject === "maths" && item.class === "9th";    //return if subject = maths and class = 9th 
}

ffArray = myClass.filter(myNewFunc);

console.log(ffArray);


/************************** Chaining *************************/ 
//multiple maps and filter

let arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let finalNumbers = arrNums.map((i) => i * 10)       
                          .map((i) => i + 2)
                          .filter((i) => i%2 === 0)
                          .filter((i) => i > 20)

console.log(finalNumbers);



