// let myFirstPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async Task Complete.");
//         resolve();
//     }, 1000)
// });


// myFirstPromise.then(function() {
//     console.log("promise consumed");
// })



// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task completed");
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log("Promise consumed.");
// })



// let mySecondPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async Task Complete.")
//     }, 1000);

//     let myObj = {
//         id: "ak1234",
//         pass: "123400"
//     };

//     resolve(myObj);

// })

// mySecondPromise.then(function(idPass) {
//     console.log(idPass)
// })




// const myFourthPromise = new Promise(function(resolve, reject) {
//     let error = false;

//     if(!error) {
//         resolve({id: 101, password: 22202});
//     } else {
//         reject("ERROR: Something went wrong.");
//     }
// })

// myFourthPromise.then(function(idPass) {
//     console.log(idPass);
//     return idPass.password;
// }).then(function(pass) {
//     console.log(pass);
// }).catch(function(error) {
//     console.log(error);
// }).finally(function() {
//     console.log("Promised consumed or rejectd.");
// })




const myLastPromise = new Promise(function(resolve, reject) {
    error = false;

    if(!error) {
        resolve({id: 120, password: 2202003121});
    } else {
        reject("ERROR: Something went wrong.");
    }
})

