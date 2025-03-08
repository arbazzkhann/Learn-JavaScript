let myArr = [];

while(true) {
    let arrVal = prompt("Enter value, for close type 'exit'.");
    
    if(arrVal === 'exit') {
        break;
    }
    myArr.push(arrVal);
}

console.log(myArr);