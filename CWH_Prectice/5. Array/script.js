let myArr = [33, 45, 34, 5, 65, 42, 24, 57, 43, 66, 44];

let maxElement = myArr[0];

for(let i=1; i < myArr.length; i++) {
    if(myArr[i] > maxElement) {
        maxElement = myArr[i]
    }
}

console.log(maxElement);