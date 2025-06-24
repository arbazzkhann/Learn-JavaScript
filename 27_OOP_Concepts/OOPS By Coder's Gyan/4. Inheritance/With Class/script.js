class BankAccountCreate {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
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

let user1 = new BankAccountCreate("user1", 300);
console.log(user1);


//Inherited class from bankAccountCreate
//currentAccount
class currentAccountCreate extends BankAccountCreate {
    transctionLimit = 50000;
    
    constructor(customerName, balance = 0) {
        //calling parent constructor
        super(customerName, balance);
    }

    takeBusinessLoan(amount) {
        console.log("Taking business loan: ", amount);
    }
}


//Inherited class from bankAccountCreate
//Saving Account
class savingAccountCreate extends BankAccountCreate {
    transctionLimit = 10000;
    
    constructor(customerName, balance = 0) {
        //calling parent constructor
        super(customerName, balance);
    }

    takingPersonalLoan(amount) {
        console.log("Taking personal loan: ", amount);
    }
}

const user2 = new currentAccountCreate("user2 current", 4000);
console.log(user2.balance);

user2.deposit(300);
console.log(user2.balance)

user2.withdraw(100);
console.log(user2.balance)