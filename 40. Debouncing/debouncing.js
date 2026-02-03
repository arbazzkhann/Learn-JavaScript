const myInput = document.querySelector("#myInput");

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

const myFunction = function (event) {
    const query = event.target.value;
    console.log('query is: ', query);
}

myInput.addEventListener('input', debounce(myFunction, 0));