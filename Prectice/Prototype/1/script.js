// https://youtu.be/AOPmqw9scfc

function userCreateConstructor(firstName, lastName, age, amount) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.amount = amount;
}

userCreateConstructor.prototype.amountIncrease = function(amount) {
    this.amount += amount;
} 

const ramesh = new userCreateConstructor("Ramesh", "Kumar", 23, 50);
console.log("Before: ", ramesh.amount);

ramesh.amountIncrease(100);
console.log("After: ", ramesh.amount);



// const user1 = {
//     firstName: "Arbaz",
//     lastName: "Khan",
//     age: 22,
//     amount: 30,
//     amountIncrease: function (amount) {
//         this.amount += amount;
//     }
// }

// const user2 = {
//     firstName: "Sonam",
//     lastName: "Empty",
//     age: 20,
//     amount: 22,
//     amountIncrease: function (amount) {
//         this.amount += amount;
//     }
// }

// let variable2 = Object.create(variable1);

// console.log(variable1);

// console.log(variable2.firstName);

// variable2.__proto__.firstName = "Hack";
// console.log(variable2.firstName);
