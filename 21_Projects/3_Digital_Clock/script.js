const clock = document.getElementById("clock");



/*
Syntax: 
        setInterval(callbackfunction {
            ----code-----
        },  time_in_milliseconds) 


:- It will refresh code after time you give in setInterval Function.
*/



setInterval(() => {
    let date = new Date();
    clock.innerText=date.toLocaleTimeString();
}, 1000);