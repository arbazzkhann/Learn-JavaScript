class BankAccountCreate{
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

class SavingAccountCreate extends BankAccountCreate {
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }
}
