const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const orange = document.querySelector('.orange');
const grey = document.querySelector('.grey');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
})
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = "yellow";
})
orange.addEventListener('click', () => {
    document.body.style.backgroundColor = "orange";
})
grey.addEventListener('click', () => {
    document.body.style.backgroundColor = "grey";
})