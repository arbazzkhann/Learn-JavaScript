function BankAccount(customerName, balance = 0 ) {
    //Variables are properties in OOP
    this.customerName = customerName;
    this.accountNumbe = Date.now();
    this.balance = balance;

    //Functions are methods
    this.deposit = (amount) => {
        this.balance += amount;
    }
}

const rakeshAccount = new BankAccount("Rakesh Kumar", 1000);
const malikFareedAccount = new BankAccount("Malik Fareed");

console.log(rakeshAccount, malikFareedAccount);

malikFareedAccount.deposit(5000);
console.log(malikFareedAccount);