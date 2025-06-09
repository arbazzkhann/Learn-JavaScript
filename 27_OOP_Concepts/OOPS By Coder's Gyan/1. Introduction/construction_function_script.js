function BankAccount(customerName, balance = 0 ) {
    //Variables are properties in OOP
    this.customerName = customerName;
    this.accountNumbe = Date.now();
    this.balance = balance;
}

const rakeshAccount = new BankAccount("Rakesh Kumar", 1000);
const malikAccount = new BankAccount("Rakesh Kumar");


console.log(rakeshAccount, malikAccount)