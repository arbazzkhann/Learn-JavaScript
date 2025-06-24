class BankAccountCreate {
    fullName;
    balance = 0;

    constructor(fullName, balance = 0) {
        this.fullName = fullName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}

const rakesh = new BankAccountCreate("Rakesh Kumar", 350);
console.log(rakesh);

// rakesh.deposit(799);
// console.log(rakesh.balance);
// rakesh.withdraw(10);
// console.log(rakesh.balance);

//user2
const user2 = new BankAccountCreate("Mahesh");
console.log(user2)
