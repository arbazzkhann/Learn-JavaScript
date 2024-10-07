// https://jsonplaceholder.typicode.com/posts


let a = 10;
let b = 20;

let result = a + b;

async function asyncFunction() {
    const fetchedAPI = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(await fetchedAPI.json());
}

asyncFunction();
console.log(`The sum is: ${result}`);