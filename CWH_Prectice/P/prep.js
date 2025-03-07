//Find the sum of n natural number


const n = Number(prompt("Enter number"));

if(isNaN(n)) {
    console.log("Enter Valid input, number should be in integer format.");
}
else{
    if(n <= 0 ) {
        console.log("Number should be greater then 0.");
    }
    else {
        let sum = 0;
        for(let i = 0; i <= n; i++) {
            sum += i;
        }
        console.log(`The sum of 1 to ${n} natural number is: ${sum}`);
    }
}