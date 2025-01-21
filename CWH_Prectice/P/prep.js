//OOPs (Object Oriented Programming) Concept in JS

//'new' keyword create new instance

const myObj = {
    name: "Original Name",
    age: 0,
    state: 'delhi',

    printDetails: function(username, age, state) {
        this.username = username;
        this.age = age;
        this.state = state;

        return this;

    }
}

const user1 = new myObj.printDetails("Arbaz", 21, "delhi")
 //'new' keyword create new instance that means 'new' creates new object in memory.
 //in this example object of user1 and user2 are separated from each other.
const user2 = new myObj.printDetails("Manav", 26, "Bihar")

console.log(`Hello ${user1.username}, you are from ${user1.state} and your age is ${user1.age}`)
console.log(`Hello ${user2.username}, you are from ${user2.state} and your age is ${user2.age}`)
