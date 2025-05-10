//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/pN-Qmv4zBcI

/*******************************************************************/
/*******************************************************************/

/********* Code without '.this' *********/
// const user = {
//     username: "Arbaz",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         // console.log("User Detail Found")
//         // console.log(`username: ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())






/********* '.this' Prectice and 'new' Keywork *********/
//new: new keyword is a constructor and it gives a new instance.
//this: .this target current execution context.

function user(username, id, password) {
    this.username = username;
    this.id = id;
    this.password = password;

    // return this      //you may or may not use 'return this' with 'new' keyword.
                        //if you are using 
}


const user1 = new user("AK", 201, "arbaz1223")
const user2 = new user("ARBAZ", 665, "223")


console.log(user1)
console.log(user2)




//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/uMI5cNeHTOc

/*****************************************************************/
/*****************************************************************/

// function chaiPrice(name, price) {
//     this.name = name;
//     this.price = price;
// }


// chaiPrice.prototype.increaseChaiPrice = function() {
//     this.price++;
//     console.log(`chai Price is ${this.price}`);
// }

// chaiPrice.prototype.printPrice = function() {
//     console.log(`chai Price is ${this.price}`);
// }

// const chai = new chaiPrice("Madhav", 25)
// const tea = new chaiPrice("Suman", 250)


// chai.increaseChaiPrice()
// tea.printPrice()




/************* This prectice with new *************/
function chaiUser(username, price) {
    this.username = username;
    this.price = price;
}

chaiUser.prototype.chaiPriceIncrease = function() {
    console.log(`user name is ${this.username} and chai price is ${this.price}`)
}

const tea = new chaiUser("Arbaz", 500)

tea.chaiPriceIncrease()





/*****************************************************************/

// Define a constructor function
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  // Add a method to the prototype of Animal
  Animal.prototype.makeSound = function () {
    console.log(this.sound);
  };
  
  // Create an instance of Animal
  let cat = new Animal('Cat', 'Meow');
  
  // Call the method from the prototype
  cat.makeSound(); // Outputs: "Meow"
  
  // Create another instance of Animal
  let dog = new Animal('Dog', 'Woof');
  
  // Call the method from the prototype
  dog.makeSound(); // Outputs: "Woof"




/******************** Prectice ********************/
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.playSound = function() {
  console.log(this.sound)
}

let mouse = new Animal("mouse", "mmm");
let cow = new Animal("mouse", "moo");

mouse.playSound()
cow.playSound()