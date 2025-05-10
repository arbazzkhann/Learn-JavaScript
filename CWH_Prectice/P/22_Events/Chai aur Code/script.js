//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/_ALUMTa8BAE

/**************************************************************************/
/**************************** Events in JavaScript ************************/





//onclick event
// document.querySelector(".taj-mehal").onclick = function() {
//     alert("onclick");
// }





/********** Event Listener ************/
/*
Syntax: 
            addEventListener('event', call_back_function, userCapture)

userCapture is true or false
*/





//event listner
// document.querySelector(".taj-mehal").addEventListener('click', () => {
//     alert("Event Listner")
// })

//it is default addEventListener with false
// document.querySelector(".taj-mehal").addEventListener('click', (e) => {
//     console.log(e)
// }, false)






// **** Prectice Event Listener with false ****
//false: it is worked on bubbling theory
// document.querySelector(".images").addEventListener('click', () => {
//     console.log("Images Clicked");
// }, false)

// document.querySelector(".taj-mehal").addEventListener('click', () => {
//     console.log("taj-mehal clicked");
// }, false)






// **** Prectice Event Listener with true ****
//true: it is worked on capturingMode
// document.querySelector(".images").addEventListener('click', () => {
//     console.log("Images Clicked");
// }, true)

// document.querySelector(".taj-mehal").addEventListener('click', () => {
//     console.log("taj-mehal clicked");
// }, true)






// **** stopPropagation() ****
//stopPropagation: it will stop functioning of other events
// document.querySelector(".images").addEventListener('click', () => {
//     console.log("Images Clicked");
// })

// document.querySelector(".taj-mehal").addEventListener('click', (e) => {
//     console.log("taj-mehal clicked");
//     e.stopPropagation();  //stopping event bubbling.
// })






// **** preventDefault() ****
document.querySelector('.google').addEventListener('click', function(e) {
    e.preventDefault();    //it will stop next processes. therefore you can't forwarded to google site.
    console.log("taj-mehal Clicked");
}, false) 


/*********************************************************************************/
/*********************************************************************************/
// ******** Small Project for Prectice *********
//Ques. If we click a perticular Image then image should be removed.

//**** First Method: we apply properties on single images one by one.
//**** it is a very time consuming.
// document.querySelector("#image1").addEventListener('click', function(e) {
//     document.querySelector("#list1").style.display="none";
// })
// document.querySelector("#image2").addEventListener('click', function(e) {
//     document.querySelector("#list2").style.display="none";
// })

// document.querySelector("#image3").addEventListener('click', function(e) {
//     document.querySelector("#list3").style.display="none";
// })

// document.querySelector("#image4").addEventListener('click', function(e) {
//     document.querySelector("#list4").style.display="none";
// })

/******************************************************/
//**** First Method: using 'target' event
//**** it is less time consuming.
// document.querySelector(".images").addEventListener('click', function(e) {
//     e.target.parentNode.remove();
// })