# Encapsulation
**Bundling** data (variables) and methods (functions) that operate on that data within a single unit (usually a class), and **restricting direct access** to some of the object’s components to **protect the internal state**.

## Older private properties convension:
* Previously we use **_** in the begning of properites that should be **private**.

## New private properties:
* Now we use **#** to define private properites.
* private properites only access within class.

### Example:
```js
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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

    // using "getter" and "setter"
    // accessing as normal property
    set balance(amount) {
        if(isNaN(amount)) {
            throw new Error('Amount is not a valid input.');
        }
        this.#balance = amount
    }
    get balance() {
        return this.#balance;
    }
```
### Accessing private properties
```js
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