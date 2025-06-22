class BankAccountCreate {
    fullName;
    balance = 0;

    constructor(fullName, balance = 0) {
        this.fullName = fullName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
}

const rakesh = new BankAccountCreate("Rakesh Kumar", 350);
console.log(rakesh);
console.log(typeof BankAccountCreate);