# Array
Array is a **linear data structure** that **stores multiple values** in **continuous manner**.

### Example:
```js
let arr = [10, 20, 30];
```

## Linear Data Structure

* A linear data structure stores data in a sequential (line-like) order.

* Types in JavaScript:
    * Array
    * Stack
    * Queue

* All elements are stored and accessed one after another (linearly).


### Questions:
1. Create empty array length of 5 and take number from user and print into DOM?

```js
const data = document.querySelector('.data');

let myArr = new Array(3);

for(let i = 0; i < myArr.length; i++) {
    let inputNum = prompt("Enter Number");
    myArr[i] = inputNum;
}

let html = '';

for(let i = 0; i < myArr.length; i++) {
    html += `<h1>${myArr[i]}</h1>`
}

data.innerHTML = html

```