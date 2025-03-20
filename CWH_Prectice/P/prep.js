//global scope
let hello = "hello world";
{
    console.log(hello); //it can be access anywhere in the code;
}


// block scope
{
    const myVal = 10;
}

// console.log(myVal) //referenceError

//function scope
function myName() {
    var myNameVar = "Arbaz";
}

// console.log(myNameVar) //referenceError


