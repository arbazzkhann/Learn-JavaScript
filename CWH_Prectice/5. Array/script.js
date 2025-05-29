let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let maxElement = -Infinity;
let nextMaxElement = -Infinity;

for(let i=0; i < myArr.length; i++) {
    if(myArr[i] > maxElement) {
        nextMaxElement = maxElement;
        maxElement = myArr[i];
    }
    else if (myArr[i] > nextMaxElement && myArr[i] !== maxElement) {
        nextMaxElement = myArr[i];
    }
}

console.log("Max: ", maxElement);
console.log("Second Max: ", nextMaxElement);