let myArr = [33, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let maxElement = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > maxElement) {
        secondMax = maxElement;
        maxElement = myArr[i];
    } 
    // else if (myArr[i] > secondMax && myArr[i] !== maxElement) {
    //     secondMax = myArr[i];
    // }
}

console.log("Max:", maxElement);
console.log("Second Max:", secondMax);
