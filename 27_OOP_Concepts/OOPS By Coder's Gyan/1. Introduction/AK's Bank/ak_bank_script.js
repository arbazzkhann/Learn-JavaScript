//constructor function
function BankAccountCreation (customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }
    
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const initialBalance = document.querySelector('#initialBalance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAccountCreation(customerName.value, parseInt(initialBalance.value));
    accounts.push(account);

    // console.log(customerName.value, initialBalance.value);
    console.log(accounts); //Printing array of accounts
});