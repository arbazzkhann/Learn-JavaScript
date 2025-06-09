# OOP (Object Oriented Programming)
It is a coding **paradigm** / **style** / **way**.

* More ways of Programming: 
    1. Processional,
    2. Functional, etc.

<!-- ## Why OOPS? -->

## Creating Object in JS
There are many ways of creating object in javascript
1. Construction Function: 

```js
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

//calling function
malikFareedAccount.deposit(5000);
console.log(malikFareedAccount);
```
