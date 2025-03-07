//Find the sum of factorial


const n = Number(prompt("Enter number"));

if(isNaN(n)) {
    console.log("Enter Valid input, number should be in integer format.");
}
else{
    if(n <= 0 ) {
        console.log("Number should be greater then 0.");
    }
    else {
        let fact = 1;
        for(let i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log(`The sum of factorials of natural number ${n} is: ${fact}`);
    }
}