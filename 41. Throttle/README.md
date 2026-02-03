# Throttle

* Throttle is a **technique** used to **limit how often a function can be executed** within a **specific period of time**, regardless of how many times the associated event is triggered.

* This improves application performance by controlling the frequency of expensive operations like scroll handling, window resizing, or API calls.


## Example:

```js
const myInput = document.querySelector("#myButton");

//throttle function
function throttle(func, delay) {
    let shouldCall = true;
    return function(...args) {
        if(!shouldCall) return;
        func(...args);
        shouldCall = false;

        setTimeout(() => {
            shouldCall = true;
        }, delay);
    }
}

const buttonClick = () => {
    console.log("button clicked");
}

myInput.addEventListener('click', throttle(buttonClick, 1000));
```