

let a = 10;
let b = 5;

/**********setTimeout**********/
/*
Syntax:
        setTimeout(call_back_function, time_in_millisecond)
*/


/**************************/
// setTimeout(function() {
//     console.log(a+b)
// }, 3000)


/**************************/
// let heading = document.querySelector("h1")
// setTimeout(function(){
//     heading.innerText = "Heading Changed"
//     heading.style.fontFamily="Arial"
//     heading.style.color="green"
// }, 2000)



/******************************** Prectice ********************************/
//Ques. Make button and when this button clicked timeout will be clear.
//
// let heading1 = document.querySelector(".head1")
// let stopButton = document.querySelector("#stop")

// setTimeout(function() {
//     heading1.innerText = "heading changed";
// }, 3000)

// stopButton.addEventListener('click', function() {
//     clearTimeout(heading1)
// })


//Same Question but with start button
// let heading1 = document.querySelector(".head1")
// let startButton = document.querySelector("#start")
// let stopButton = document.querySelector("#stop")

// //setTimeout
// startButton.addEventListener('click', function() {
//     setTimeout(function() {
//         heading1.innerText = "Heading Changed";
//         heading1.style.color = "green";
//         console.log("heading Changed")
//     }, 3000)    
// })

// //clear timeout
// stopButton.addEventListener('click', function() {
//     clearTimeout(heading1);
//     console.log("Heading Stoped")
// })



