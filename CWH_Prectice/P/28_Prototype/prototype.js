
/*  Prototype : a prototype is an object from which other objects inherit properties. 
               Every JavaScript object has a prototype, and when you access a property 
               on an object, if the property is not found on the object itself, JavaScript 
               looks for it in the object's prototype, and so on, up the prototype chain.


    Prototype: JavaScript objects have a special property called prototype that is either null or reference
               of another object.               

    When we try to read a property from a object and its missing, Javascript automatically takes it from
    the prototype. This is call prototype inheritance.

    we can set prototype by setting __proto__ now if we read a property from the object which is not in
    object and is present in the prototype, javascript will take it from prototype.

    javascript first search property in self object, if javascript can't find that property then it will automatically
    searches into inherit prototype objects.
*********************************************************************************/
/************** Prototype **************/

// let user = {
//     name: "arbaz",
//     id: 1010
// }

// let p = {
//     func: () => {
//         console.log("hello i am p");
//     },

//     hell: "ABCD"


// }

// user.__proto__ = p;         //inheriting prototype of user with prototype of p

// user.func()                 //calling 'p' object key from 'user' object
// console.log(user.hell)    










/************** Prototype (prectice) **************/
let myObj = {
    name: "arbaz",
    id: 101,
    username: "arbaz11223"
}

let address = {
    city: "delhi",
    contry: "india"
}


myObj.__proto__ = address;


//Another Way
myObj.__proto__ = {
    animal: "monkey"
}


console.log(myObj.city)
console.log(myObj.animal)
// console.log(myObj.city , myObj.animal)










/************* Simple Question *************/
// //create a object which return true length of string

// String.prototype.trueLength = function() {
//     console.log(`The true length is ${this.trim().length}`);
// }

// let stringName = "    ABBBBBBDDhhhhh      ";


// stringName.trueLength()   


// "MMA    ".trueLength()    //direct call





