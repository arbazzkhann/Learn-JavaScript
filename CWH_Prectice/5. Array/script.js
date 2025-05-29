let myArr = [303, 45, 34, 5, 65, 643, 42, 24, 57, 43, 66, 44];

let i = 0;
let j = myArr.length - 1;

while (i < j) {
    let temp = myArr[i];
    myArr[i] = myArr[j];
    myArr[j] = temp;

    i++;
    j--;
}

console.log(myArr);