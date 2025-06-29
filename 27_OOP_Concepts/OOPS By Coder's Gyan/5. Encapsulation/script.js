class BankAccountCreate {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {
        if(isNaN(amount)) {
            throw new Error('Amount is not a valid input.');
        }
        this.#balance = amount
    }
    getBalance() {
        return this.#balance;
    }
}

const rakesh = new BankAccountCreate("rakesh", 3000);

console.log(rakesh);

// rakesh.#balance = "Suman";  //only access within class
rakesh.setBalance(340);
console.log(rakesh.getBalance());