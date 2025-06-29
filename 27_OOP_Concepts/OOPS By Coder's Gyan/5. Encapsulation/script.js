class BankAccountCreate {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    //deposit and withdraw amount
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }

    //public methods
    // setBalance(amount) {
    //     if(isNaN(amount)) {
    //         throw new Error('Amount is not a valid input.');
    //     }
    //     this.#balance = amount
    // }
    // getBalance() {
    //     return this.#balance;
    // }

    //getter and setter
    //accessing as normal property
    set balance(amount) {
        if(isNaN(amount)) {
            throw new Error('Amount is not a valid input.');
        }
        this.#balance = amount
    }
    get balance() {
        return this.#balance;
    }

    //private method
    #calculateInterest() {
        console.log("Calculated interest is ", this.#balance/23);
    }
    //getter and setter for calculateInterest
    get calculateInterest() {
        this.#calculateInterest();
    }
}

const rakesh = new BankAccountCreate("rakesh", 3000);

console.log(rakesh);

//it will throw error
//only access within class
// rakesh.#balance = "Suman";

//public methods
// rakesh.setBalance(340);  //setting balance using public methods
// console.log(rakesh.getBalance());  //using public methods

//getter and setter
rakesh.balance = 550;  //setting balance using setter
console.log(rakesh.balance);  //using getter

//getting private method
rakesh.calculateInterest;