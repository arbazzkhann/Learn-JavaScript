//Inheritance with functional programming

//BankAccount Constructor (1st type account)  --  starts here
function BankAccountCreate(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
}

//Deposit prototype for BankAccount Constructor
BankAccountCreate.prototype.deposit = function(amount) {
    this.balance += amount;
}

//Withdraw BankAccount Constructor
BankAccountCreate.prototype.withdraw = function(amount) {
    this.balance -= amount;
}
//BankAccount Constructor  --  ends here



//creating user bankAccount (2nd type account)
// let rakesh = new BankAccountCreate("Rakesh", 2000);
// console.log("Whole rakesh function: ", rakesh);

// console.log("Rakesh initial Balance: ", rakesh.balance)

// //deposit
// rakesh.deposit(200);
// console.log("Rakesh deposit 200: ", rakesh.balance);

// //withdraw
// rakesh.withdraw(500);
// console.log("Rakesh withdraw 500: ", rakesh.balance);


////CurrentAccount Constructor  --  starts here
function CurrentAccountCreate(customerName, balance = 0) {
    //constructor linking (.call)
    BankAccountCreate.call(this, customerName, balance);

    this.transctionLimit = 50000;
}

//Linking prototype into another function
//Now we can use deposit and withdraw function
CurrentAccountCreate.prototype = Object.create(BankAccountCreate.prototype)



let user2 = new CurrentAccountCreate("user2", 5000);
console.log(user2.balance);

user2.deposit(3000)
console.log(user2.balance)

user2.withdraw(200);
console.log(user2.balance)
