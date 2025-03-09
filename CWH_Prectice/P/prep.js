//String number

let input = prompt("Enter number: ");

let copyInput = input;

if(!isNaN(input)) {
    let sum = 0;
    while(input > 0) {
        let fact = 1;
        let rem = input % 10;
        for(let i = 1; i <= rem; i++) {
            fact *= i;
        }
        // sum = sum + fact;
        sum += fact;
        input = Math.floor(input / 10);
    }   
    if(sum == copyInput) {
        console.log(`${copyInput} is a strong number.`);
    }
    else {
        console.log(`Number is: ${copyInput} and sum: ${sum}, therefore its not a strong number.`);
    }
}
else {
    console.log("Invalid input.");
}
