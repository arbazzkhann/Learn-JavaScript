let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let secondArr = [];

for(let i = myArr.length - 1; i >= 0; i--) {
    secondArr.push(myArr[i]);
}

console.log(secondArr)