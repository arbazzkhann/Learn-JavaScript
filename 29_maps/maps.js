/**********************************************************************/
/*
**Maps makes a new array

Syntax: _array(function(value) {
    *operation_with_value
})

*/



/*********** Map on Array ***********/

// let myArr = [1, 2, 4, 3, 5, 7, 8]

// let mapArr = myArr.map(function(x, index, array) {
//     return x * 10;
// })


// mapArr.forEach(function(x){
//     console.log(x);
// });






/*********** Map on Array of objects ***********/
// let myArr = [
//     {firstName: "Aman", id: 101},
//     {firstName: "Suman", id: 102},
//     {firstName: "Madhav", id: 103},
//     {firstName: "Sanjay", id: 104}
// ]


// let extraFunc = function(x) {
//     console.log(`First Name is ${x['firstName']} and id is ${x['id']}.`);
// }

// myArr.map(extraFunc)






/*********** Full Syntax of Map ***********/

let myArr = [1, 2, 3, 4, 5, 3, 4, 5, 4]

let fArr = myArr.map((value, index, array) => {
    console.log(`Value: ${value}, Index: ${index}, Array: ${array}`)

})




