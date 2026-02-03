//Uitility functions
class User {
    balance = 0;
    accountNumber = Date.now();
    static id = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = User.id++;
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

const user1 = new User("ramesh", 36);
const user2 = new User("mahesh", 32);
const user3 = new User("ali", 43);

console.log(user1, user2, user3);
