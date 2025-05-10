/*
    always events gives priority 'javascript events' first 
*/

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const mouseover1 = document.querySelector("#mouse-over1");
// const btn3 = document.querySelector("#btn3");


// btn1.onclick = () => {
//     alert("btn 1 clicked");
// }

// btn2.ondblclick = () => {
//     alert("btn 2 clicked");
// }

// mouseover1.onmouseover = () => {
//     alert("mouse over on 1st div")
// }

// btn3.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }



//Ques. Make a Button when we click change dark-mode and second time change to light-mode.

// const dark = document.querySelector("#dark");
// const light = document.querySelector("#light");

// dark.addEventListener('click', function() {
//     document.body.style.backgroundColor = "#212121"
// })
// light.addEventListener('click', function() {
//     document.body.style.backgroundColor = "white"
// })



const modebtn = document.getElementById("modebtn");
let currentState = "light";

modebtn.addEventListener('click', () => {
    if (currentState === "light") {
        document.body.style.backgroundColor = "#212121";
        currentState = "dark"
    } else if(currentState === "dark") {
        document.body.style.backgroundColor = "white";
        currentState = "light"
    } else {
        console.log("error");
    }
})