
let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")


let colorChange = function randomColor() {
    let hex = "1234567890ABCDEF"
    let col = "#";

    for(let i = 0; i < 6; i++) {
        col += hex[Math.floor(Math.random() * 16)]
    }

    return col;
}

let intervalId;

//Start
function startChangeBodyColor() {
    document.body.style.backgroundColor = colorChange()
    console.log(colorChange())
}

function intervalColorChange() {
    intervalId = setInterval(startChangeBodyColor, 600)
}

startButton.addEventListener('click', intervalColorChange)



//Stop Button
function stopChangeBodyColor() {
    clearInterval(intervalId);
}

stopButton.addEventListener('click', stopChangeBodyColor)