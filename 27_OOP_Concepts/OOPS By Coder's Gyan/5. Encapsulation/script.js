class BankAccountCreate {
    constructor(customerName, balance) {
        this.customerName = customerName;
        this._balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        this._balance -= amount;
    }
}

const rakesh = new BankAccountCreate("rakesh", 3000);

console.log(rakesh);

rakesh._balance = "Suman";
console.log(rakesh);