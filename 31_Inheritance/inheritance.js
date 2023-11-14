/**************************
Class Inheritance: Class inheritance is a way for one class to extends another class. This is done by using
                   'extends' keyword.



Extends Keyword: 'extends' keyword is used to extends a class into another class.

    Syntax: class child_class_name extends parent_class_name {
        ***Code***
    }

**NOTE: Child can access all properties of parent class but parent can't access any property of chil class.


**************************/


// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`User-Name is ${this.username}`);
//     }
// }

// class Teacher extends User {
//     constructor(username, email, password) {
//         super(username)
//         this.email = email;
//         this.password = password;
//     }

//     addCourses() {
//         console.log(`New Course Added by ${this.username}`)
//     }
// }


// const chai = new Teacher("chai", "chai@fb.com", "122")
// const tea = new Teacher("tea", "tea@yt.com", "122")

// console.log(chai);
// console.log(tea);





/************************ Prectice ************************/

//Parent Class
class Animal {
    constructor(name, col) {
        this.name = name;
        this.col = col;
    }

    shout() {
        console.log(`${this.name} is Shouting!`);
    }

    run() {
        console.log(`${this.name} is Running!`);
    }

    color() {
        console.log(`${this.name} is ${this.col}`);
    }
}



//Inherit class
class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is eating banana`);
    }
}



const dog = new Animal("Dog", "Red");
const monkey = new Monkey("Monkey", "Orange");


monkey.eatBanana()      //monkey class method.
monkey.shout()          //extended class access parent method.

// monkey.run()
// monkey.shout()
// monkey.color()