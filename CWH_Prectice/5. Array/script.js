const data = document.querySelector('.data');

let myArr = new Array(3);

for(let i = 0; i < myArr.length; i++) {
    let inputNum = prompt("Enter Number");
    myArr[i] = inputNum;
}

let html = '';

for(let i = 0; i < myArr.length; i++) {
    html += `<h1>${myArr[i]}</h1>`
}

data.innerHTML = html
