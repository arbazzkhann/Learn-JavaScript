//constructor function
function BankAccountCreation () {
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


const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const initialBalance = document.querySelector('#initialBalance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(customerName.value, initialBalance.value);
})