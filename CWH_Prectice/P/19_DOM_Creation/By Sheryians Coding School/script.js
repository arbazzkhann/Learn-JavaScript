//YouTube Channel: Sheryians Coding School
//Video Link: https://youtu.be/2IPEp_4obGw

/******************************************************************/
/*********************** DOM MUNIPULATION *************************/

const heading = document.querySelector(".heading");

// console.log(heading);

heading.innerHTML = "HHELO";  //change in HTML

//******* Change in CSS *******
heading.style.backgroundColor = "yellow";  // Change Background
heading.style.color = "green"; //Change color
heading.style.margin = "5px";  //Change -Margin
heading.style.padding = "10px";  //Change Padding
heading.style.paddingLeft = "30px";  //Change Padding-Left
heading.style.borderRadius = "50px";  //Change Border-Radius


//******* Event Listner ******* 
document.querySelector(".div2").addEventListener("click", function() {
    document.querySelector(".div2").innerHTML = "PARAGRAPH CHANGED!!";
    document.querySelector(".heading").innerHTML = "HEADING CHANGED!!";
    heading.style.color= "black";
    heading.style.textAlign = "center";
}); 


//******* ON BULD CLICK *******
document.querySelector(".bulb").addEventListener("click", function() {
    document.querySelector(".bulb").style.backgroundColor = "yellow";
    document.querySelector(".bulb").innerHTML = "ON";
})


//******* DOUBLE EXTERNAL BUTTON ******* 
document.querySelector("#on").addEventListener("click", function() {
    document.querySelector(".bulb").style.backgroundColor = "yellow";
    document.querySelector(".bulb").innerHTML = "ON";
})
document.querySelector("#off").addEventListener("click", function() {
    document.querySelector(".bulb").style.backgroundColor = "white";
    document.querySelector(".bulb").innerHTML = "OFF";
})


//******* SINGLE BUTTON *******
let val = 0;
document.querySelector("#click").addEventListener("click", function() {
    if(val == 0) {
        document.querySelector(".bulb").style.backgroundColor = "yellow";
        document.querySelector(".bulb").innerHTML = "ON";
        val = 1;
    }
    else {
        document.getElementById("bulb-id").style.backgroundColor = "white";
        document.querySelector(".bulb").innerHTML = "OFF";
        val = 0;
    }
})