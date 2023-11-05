let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');

let intervalId;

function randomColor() {
    hex = 'ABCDEF0123456789';
    col = '#';
    for(let i = 0; i < 6; i++) {
        col += hex[Math.floor(Math.random() * 16)];
    }
    return col;
}

//bgcolor change
function bgColorChange() {
    document.body.style.backgroundColor = randomColor();
}

//bgInterval set
function bgAutoChange() {
    intervalId = setInterval(bgColorChange, 1000);
}

//start with event listener
startButton.addEventListener('click', bgAutoChange);


function stopBgChange() {
    clearInterval(intervalId);
}

stopButton.addEventListener('click', stopBgChange)




