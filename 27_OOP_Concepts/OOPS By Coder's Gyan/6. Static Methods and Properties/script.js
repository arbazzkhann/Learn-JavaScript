//Uitility functions
class User {
    balance = 0;
    accountNumber = Date.now();

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    desposit(amount) {
        this.balance += amount;
    }

    withdraw (amount) {
        this.balance -= amount;
    }

    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }
}

let user1 = new User("Ramesh", 29);
let user2 = new User("Suresh", 27);
let user3 = new User("Suresh", 22);

//users array
const users = [user1, user2, user3];

console.log(users);

// users.sort(User.compareByAge);

console.log(users.sort(User.compareByAge));