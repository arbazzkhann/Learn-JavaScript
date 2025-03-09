//Reversing the user input number

let input = prompt("Enter number");

if(!isNaN(input)) {
    let rev = 0;
    while(input > 0) {
        let rem = input % 10;
        rev = rev * 10 + rem;
        input = Math.floor(input / 10);
    }
    console.log(rev);
}
else {
    console.log("Enter valid input.");
}