class BankAccountCreate {
    customerName;
    #balance = 0;
    accountNumber;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.#balance = +balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += +amount;
    }
    //getter for property
    get viewBalance() {
        return this.#balance;
    }

}

// const bankAccountCreateForm = document.querySelector('#bankAccountCreateForm');
// const bankAccountCreateNameInput = document.querySelector('#bankAccountCreateNameInput');
// const bankAccountCreateBalanceInput = document.querySelector('#bankAccountCreateBalanceInput');
// const bankAccountCreateSubmitInput = document.querySelector('#bankAccountCreateSubmitInput');

// bankAccountCreateForm.addEventListener('submit', (e) => {
//     e.preventDefault();

    
// });

const ramesh = new BankAccountCreate("ramesh", 30);
ramesh.deposit(45)

console.log(ramesh.viewBalance);

console.log(ramesh);