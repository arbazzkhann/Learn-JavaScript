let sum = 0;

while (true) {
    let input = prompt("Enter Number: ");

    if (input == "exit") {
        break;
    }

    let myVal = Number(input);

    if (!isNaN(myVal)) {
        sum += myVal;
    } else {
        console.log("Invalid input! Please enter a number.");
    }
}

console.log("Total Sum:", sum);