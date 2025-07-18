const showUsersButton = document.querySelector('#showUsersButton');

// Bank account create form
const bankAccountCreateForm = document.querySelector('#bankAccountCreateForm');
const bankAccountCreateNameInput = document.querySelector('#bankAccountCreateNameInput');
const bankAccountCreateBalanceInput = document.querySelector('#bankAccountCreateBalanceInput');

// Deposit amount form
const depositAmountForm = document.querySelector('#depositAmountForm');
const depositAccountNumberInput = document.querySelector('#depositAccountNumberInput');
const depositAmountInput = document.querySelector('#depositAmountInput');

// Withdraw amount form
const withdrawAmountForm = document.querySelector('#withdrawAmountForm');
const withdrawAccountNumberInput = document.querySelector('#withdrawAccountNumberInput');
const withdrawAmountInput = document.querySelector('#withdrawAmountInput');

// Saving account create form
const savingAccountCreateForm = document.querySelector('#savingAccountCreateForm');
const savingAccountCreateNameInput = document.querySelector('#savingAccountCreateNameInput');
const savingAccountCreateBalanceInput = document.querySelector('#savingAccountCreateBalanceInput');


class BankAccountCreate{
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = +balance;
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

//empty array for users store
let emptyArrayForUsers = [];

//form1 submit
bankAccountCreateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let user1 = new BankAccountCreate(bankAccountCreateNameInput.value, bankAccountCreateBalanceInput.value);
    emptyArrayForUsers.push(user1);
});

//showUsersButton
showUsersButton.addEventListener('click', (e) => {
    console.log(emptyArrayForUsers);
});

//deposit amount form
depositAmountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    emptyArrayForUsers.map((item) => {
        if(item.accountNumber === +depositAccountNumberInput.value) {
            item.deposit(+depositAmountInput.value);
        }
    })
});

//withdraw amount form
withdrawAmountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    emptyArrayForUsers.map((item) => {
        if(item.accountNumber === +withdrawAccountNumberInput.value) {
            item.withdraw(+withdrawAmountInput.value);
        }
    })
});

//Saving account form
savingAccountCreateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let user1 = new SavingAccountCreate(savingAccountCreateNameInput.value, savingAccountCreateBalanceInput.value);
    emptyArrayForUsers.push(user1);
})