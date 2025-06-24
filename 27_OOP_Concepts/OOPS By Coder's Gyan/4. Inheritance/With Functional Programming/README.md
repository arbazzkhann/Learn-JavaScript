# Inheritance in JavaScript

## Inheritance in function:

### Linking Constructor of another function/class

#### Syntax:
DO this into child class or function
```js
parent_name.call(this, ...arguments);

//Example:
BankAccountCreate.call(this, customerName, balance);
```

### Linking parent prototypes into another function

#### Syntax:
```js
parent_function_name.prototype = Object.create(child_function_name.prototype);

//Example:
CurrentAccountCreate.prototype = Object.create(BankAccountCreate.prototype);
```
