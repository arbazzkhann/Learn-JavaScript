//account creation constructor function
function BankAccountCreate(fullName, balance) {
    this.fullName = fullName;
    this.balance = balance;

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // }
    // this.withdraw = function (amount) {
    //     this.balance -= amount;
    // }
}

const rakesh = new BankAccountCreate("Rakesh", 3000);
const john = new BankAccountCreate("John", 200);

// console.log("Rakesh: ", rakesh.balance);
// console.log("John: ", john.balance);

//Updating balance without prototype
// rakesh.deposit(500);
// john.deposit(800);

console.log("Rakesh: ", rakesh.balance);
console.log("John: ", john.balance);

//----Prototype-----
//Creating prototype in BankAccountCreate function
BankAccountCreate.prototype.deposit = function (amount) {
    this.balance += amount
}
BankAccountCreate.prototype.withdraw = function (amount) {
    this.balance -= amount
}

console.log(BankAccountCreate.prototype);

//updating balance with prototype
rakesh.deposit(5000);
john.deposit(8000);

console.log("Rakesh: ", rakesh);
console.log("John: ", john);