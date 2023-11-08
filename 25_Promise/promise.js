//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/NJwRQgsu1Q8

/***************************************************************************/
/********************************* Promise *********************************/


/**** prominse in variable and calling separately ****/
// //creating promise
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task complete.");
//         resolve();  //calling .then
//     }, 1000);
// })


// //consuming promise
// promiseOne.then(function() {
//     console.log("Promised Consumed");
// })





// /**** prominse without variable and direct calling ****/
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve(); //calling .then
//     }, 1000)

// }).then(function () {
//     console.log("Promised 2 consumed");
// })





// /**** passing object as parameter in resolve() ****/
// const thirdPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let myObj = {                            //creating object
//             name: "subhash",
//             email: "subhash@example.com"
//         };

//         console.log("third promise created.")    //print

//         resolve(myObj);   //calling resolve with passing created object
//     }, 1000)
// })


// thirdPromise.then(function(user) {               //user is object. from resolve(myObj)
//     console.log(user["email"])
// })







// /**** promise with .then() .catch() and .finally() ****/
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false;   //true or false
//         if(!error) {
//             resolve({username: "Arbaz", password: "1234"})   //passing object as parameter
//         } else {
//             reject("ERROR: Something went wrong");   //passing a error string
//         }
//     }, 1000)
// })


// promiseFour
// .then(function(user) {
//     console.log(user);
//     return user.username
// }).then(function(username) {   //it any error not occur
//     console.log(username)
// }).catch(function(error) {    //catch for error
//     console.log(error);
// }).finally(function() {      //finally will always executed
//     console.log("The Promise is resolved or Rejected.")
// })







// /**** consuming promise with async ****/
// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {

//         let error = true;    //true or false

//         if(!error) {
//             resolve({name: "JavaScript", password: "123"});
//         } else {
//             reject("ERROR: JS went wrong");
//         }
//     }, 1000)
// })

// //  //direct function
// // async function consumePromiseFive() {
// //     const response = await promiseFive;
// //     console.log(response);
// // }

//     //or

// //with try catch block becasue of error handling
// async function consumePromiseFive() {
//     try {   //try catch block
//         // const response = await promiseFive;
//         console.log(await promiseFive);
//     } catch (error) {
//         console.log(error)    //print error
//     }
// }

// consumePromiseFive();










/******* Use Api with Fetch *******/
const hittingApi = fetch('https://api.github.com/users/arbazzkhann')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// .then((response) => {
//     return response.json()
// })