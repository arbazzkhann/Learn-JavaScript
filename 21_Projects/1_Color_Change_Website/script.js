let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

box1.addEventListener('click',() => {
    document.querySelector(".body").style.backgroundColor="grey";
})

box2.addEventListener('click',() => {
    document.querySelector(".body").style.backgroundColor="white";
})

box3.addEventListener('click',() => {
    document.querySelector(".body").style.backgroundColor="blue";
})

box4.addEventListener('click',() => {
    document.querySelector(".body").style.backgroundColor="yellow";
})


document.querySelector(".body").style.backgroundColor="#212121";