// Event Bubbling and Event Capturing

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const superChild = document.querySelector(".superChild");


parent
.addEventListener("click", function() {
    alert("I am Parent");
}, true);

child
.addEventListener("click", function() {
    alert("I am child");
}, );

superChild
.addEventListener("click", function() {
    alert("I am Super Child");
}, );