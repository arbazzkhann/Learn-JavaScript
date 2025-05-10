//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/-owpuf4lbyU

/***************************************************************************************/
/*********************************** call and this *************************************/

/*
**Call is a function that helps you to change the context of the invoking function.

**In other words, it helps you to replace the value of 'this' inside a function with
whatever value you want.

*/




// function setUsername(username) {
//    this.username = username;         
// }


// function createUser(username, email, password) {
//     setUsername.call(this, username)     //this and call

//     this.email = email;
//     this.password = password;
// }


// const akhan = new createUser("arbaz", "arbaz@google.com", "2323")


// console.log(akhan)



/*********************** Prectice***********************/

// method 1 - function in object
// const user1 = {
//     firstName: "Arbaz",
//     lastName: "Khan",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const user2 = {
//     firstName: "Raghav",
//     lastName: "Kumar"
// }


// console.log(user1.fullName())

// console.log(user1.fullName.call(user2))     //**call function refers '.this' properties to user2.
//                                             //**change user1 instance to user2.





// method 2 - function as separate
const myObj1 = {
    firstName: "Arbaz",
    lastName: "Khan"
};

const myObj2 = {
    firstName: "Mayank",
    lastName: "Sharma"
};

const lastName = function() {
    return `${this.firstName} ${this.lastName}`;
}


console.log(lastName.call(myObj1))      //call myObj1
console.log(lastName.call(myObj2))      //call myObj2