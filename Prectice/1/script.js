//Account creation input
const accountCreationForm = document.querySelector('#accountCreationForm');
const creationFullName = document.querySelector('#creationFullName');
const creationAmount = document.querySelector('#creationAmount');

//Account Update Input
const accountNumber = document.querySelector('#accountNumber');
const updationAmount = document.querySelector('#updationAmount');
const accountUpdationSelectionBox = document.querySelector('#accountUpdationSelectionBox');
const accountUpdationForm = document.querySelector('#accountUpdationForm');

//Empty array for accounts
let accounts = [];

//Factory function for account
const BankAccountCreationFactoryFunction = function (fullName, amount = 0) {
    this.fullName = fullName;
    this.amount = amount;
    this.accountNumber = Date.now();

    this.deposit = (amount) => {
        this.amount += amount;
    }

    this.withdraw = (amount) => {
        this.amount -= amount;
    }
}

accountCreationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const account = new BankAccountCreationFactoryFunction(creationFullName.value, parseInt(creationAmount.value));
    accounts.push(account);
    console.log(accounts);
})
