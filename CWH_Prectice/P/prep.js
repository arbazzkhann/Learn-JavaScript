//'this' keyword
//'this' keyword in javascript refers to the object that is executing the current function.
//its value depends on how and where the function called.

//1. 'this' in global scope (using it alone)
console.log(this)
//in browser 'this' refers to the 'window' object.
//in node environment 'this' refers to the global scope.
//in strict mode 'this' refers to the undefined.




//2. 'this' in an object method
// let name = 'madhar'
const person = {
    name: "John",
    greet: function() {
        console.log(this.name); //refers to the 'John'
    }
};
person.greet(); //Output: John
//this refers to the person object inside the method.




//3. 'this' in a regular function
//In a regular function, this depends on how the function is called
function showThis() {
    console.log(this);
};
showThis();
//In browser refers to 'window' object.
//In strict mode refers to 'undefined'




//4. 'this' in an 'Event handler'
//When we used in an event handler, 'this' refers to the element that triggered the event
// document.getElementById('btn').addEventListener('click', function() {
//     console.log(this); //it refers to the whole button element
// });




//5. 'this' in Arrow functions
//In an Arrow function, this does not refer to the function itself.
//Instead,  it inherits 'this' from th surrounding scope.

const person2 = {
    name: "Ali",
    greet: () => {
        console.log(this.name);
    }
};
person2.greet(); //output: "global scope 'name' if existsn else 'undefined'"




//6. 'this' in a constructor function
//In a constructor function, 'this' refers to the newly created object
function Person3(name) {
    this.name = name;
}

const user1 = new Person3("John");
console.log(user1.name); //Output: John
//when using 'new', 'this' refers to the new object being created.




//7. 'this' in a setTimeout and setInterval
//In setTimeout and setInterval, 'this' usually refers to 'windows object'

const obj = {
    name: "test",
    show: function() {
        setTimeout(function() {
            console.log(this.name);
        });
    }
};
obj.show(); //Output: "undefined" (or Window object in browser).