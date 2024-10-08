let a = 10;
let b = 20;

const myPromise = new Promise((resolve, reject) => {
    if(a+b == 300) {
        resolve("Successed");
    }
    else {
        reject("Failed");
    }
})

myPromise.then((message) => {
    console.log(`Promise has been ${message}`)
}).catch((message) => {
    console.log(`Promise has been ${message}`)
})