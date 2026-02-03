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