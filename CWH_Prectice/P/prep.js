const mainHeading = document.querySelector('.mainHeading');
const para1 = document.querySelector('.para1');
const bulbDiv = document.querySelector('.bulbDiv');
const switchButton = document.querySelector('.switchButton');


switchButton.addEventListener('click', () => {
    if(bulbDiv.innerText == "OFF") {
        bulbDiv.style.backgroundColor = "yellow";
        bulbDiv.innerText = "ON";
    }
    else if(bulbDiv.innerText == "ON") {
        bulbDiv.style.backgroundColor = "white";
        bulbDiv.innerText = "OFF";
    }
})


    // bulbDiv.style.backgroundColor = "yellow"
    // bulbDiv.innerText = "ON"