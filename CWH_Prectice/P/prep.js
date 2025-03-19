function showArguments() {
    let sum = 0;
    for(let val of arguments) {
        sum += val;
    }
    return sum;
}

let sum = showArguments(2,3,4,5, 100);

console.log(sum);