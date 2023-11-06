const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalId;

function randomColorGenerator() {
    let hex = "ABCDEF0123456789";
    let col = "#";
    for(let i = 0; i < 6; i++) {
        col += hex[Math.floor(Math.random() * 16)];
    }
    return col;
}

function bgColorChanger() {
    document.body.style.backgroundColor = randomColorGenerator();
}

function autoBgChanger() {
    intervalId = setInterval(bgColorChanger, 1000);
}

start.addEventListener('click', autoBgChanger);


function stopBgChange() {
   clearInterval(intervalId);
}

stop.addEventListener('click', stopBgChange)