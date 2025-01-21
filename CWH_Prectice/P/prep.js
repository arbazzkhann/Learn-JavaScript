//OOPs (Object Oriented Programming) Concept in JS


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
const user2 = new myObj.printDetails("Manav", 26, "Bihar")

alert(`Hello ${user1.username}, you are from ${user1.state} and your age is ${user1.age}`)
