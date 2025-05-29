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

2. Print the sum of all the elements of array?
```js
let myArr = [33, 44, 53, 45, 6, 75, 667, 54];

let sum = 0;

for(let i=0; i < myArr.length; i++) {
    sum += myArr[i];
}

console.log(sum);
```

3. Find maximum element in array?
```js
let myArr = [33, 45, 34, 5, 65, 42, 24, 57, 43, 66, 44];

let maxElement = myArr[0];

for(let i=1; i < myArr.length; i++) {
    if(myArr[i] > maxElement) {
        maxElement = myArr[i]
    }
}

console.log(maxElement);
```

4. Find minimum element in array?
```js
let myArr = [33, 45, 34, 5, 65, 42, 24, 57, 43, 66, 44];

let minElement = myArr[0];

for(let i=1; i < myArr.length; i++) {
    if(myArr[i] < minElement) {
        minElement = myArr[i]
    }
}

console.log(minElement);
```

5. Finding 2nd Max element in array?
```js
let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let maxElement = myArr[0];
let secondMax = 0;

for (let i = 1; i < myArr.length; i++) {
    if (myArr[i] > maxElement) {
        secondMax = maxElement;
        maxElement = myArr[i];
    } 
    // else if (myArr[i] > secondMax && myArr[i] !== maxElement) {
    //     secondMax = myArr[i];
    // }
}

console.log("Max:", maxElement);
console.log("Second Max:", secondMax);


//Another way:
let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let maxElement = -Infinity;
let nextMaxElement = -Infinity;

for(let i=0; i < myArr.length; i++) {
    if(myArr[i] > maxElement) {
        nextMaxElement = maxElement;
        maxElement = myArr[i];
    }
    else if (myArr[i] > nextMaxElement && myArr[i] !== maxElement) {
        nextMaxElement = myArr[i];
    }
}

console.log("Max: ", maxElement);
console.log("Second Max: ", nextMaxElement);
```

6. Revese Array?
```js
let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let secondArr = [];

for(let i = myArr.length - 1; i >= 0; i--) {
    secondArr.push(myArr[i]);
}

console.log(secondArr)
```