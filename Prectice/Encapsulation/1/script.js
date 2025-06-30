class BankAccountCreate {
    customerName;
    #balance = 0;
    accountNumber;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.#balance = +balance;
        this.accountNumber = Date.now();
    }

    #deposit(amount) {
        this.#balance += +amount;
    }

    // Setter for deposit
    set deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            console.log("Invalid deposit amount.");
            return;
        }
        this.#deposit(amount);
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
ramesh.deposit = 5000;

console.log(ramesh.viewBalance);

console.log(ramesh);