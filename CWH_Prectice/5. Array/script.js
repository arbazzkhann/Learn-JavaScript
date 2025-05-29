let myArr = [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0];

let i = 0;
let j = 0;

while (i < myArr.length) {
  if(myArr[i] == 0) {
    let temp = myArr[i];
    myArr[i] = myArr[j];
    myArr[j] = temp;
    j++
  }

  i++;
}

console.log(myArr);
