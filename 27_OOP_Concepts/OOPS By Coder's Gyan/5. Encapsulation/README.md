# Encapsulation
**Bundling** data (variables) and methods (functions) that operate on that data within a single unit (usually a class), and **restricting direct access** to some of the object’s components to **protect the internal state**.

## Older private properties convension:
* Previously we use **_** in the begning of properites that should be **private**.

## New private properties and Methods:
* Now we use **#** to define private **properites/variables** and **methods/functions**.
* private properites only access **within class**, **not even in it child class**. 


### Example:
```js
//+-+-+-+-+-+-+-+-+-+-+-+-+ public methods +-+-+-+-+-+-+-+-+-+-+-+-+
    // using "public methods"
    setBalance(amount) {
        if(isNaN(amount)) {
            throw new Error('Amount is not a valid input.');
        }
        this.#balance = amount
    }
    getBalance() {
        return this.#balance;
    }

//+-+-+-+-+-+-+-+-+-+-+-+-+ getter and setter +-+-+-+-+-+-+-+-+-+-+-+-+

// using "getter" and "setter"
// accessing as normal property
// while accessing getter and setter - doesn't need of calling "()".
set balance(amount) {
    if(isNaN(amount)) {
        throw new Error('Amount is not a valid input.');
    }
    this.#balance = amount
}
get balance() {
    return this.#balance;
}

//+-+-+-+-+-+-+-+-+-+-+-+-+ accessing private variables +-+-+-+-+-+-+-+-+-+-+-+-+

//it will throw error
//only access within class
rakesh.#balance = "Suman";

//public methods
rakesh.setBalance(340);  //setting balance using public methods
console.log(rakesh.getBalance());  //using public methods

//getter and setter
rakesh.balance = 550;  //setting balance using setter
console.log(rakesh.balance);  //using getter
```


### Private methods:
```js
//+-+-+-+-+-+-+-+-+-+-+-+-+ creating private methods +-+-+-+-+-+-+-+-+-+-+-+-+
//private method
#calculateInterest() {
    console.log("Calculated interest is ", this.#balance/23);
}
//getter and setter for calculateInterest
get calculateInterest() {
    this.#calculateInterest();
}

//+-+-+-+-+-+-+-+-+-+-+-+-+ accessing private methods using "getter and setter" +-+-+-+-+-+-+-+-+-+-+-+-+
//getting private method
rakesh.calculateInterest;
```