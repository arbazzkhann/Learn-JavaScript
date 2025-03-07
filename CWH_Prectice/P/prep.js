//factors of a number:
//Video link: https://youtu.be/H88hkdA02tY?t=2574

const n = prompt("Enter number");

if(n == null) {
    console.log("cancelled");
}
else {
    if(isNaN(n)) {
        console.log("Enter Valid input, number should be in integer format.");
    }
    else{
        if(n <= 0 ) {
            console.log("Number should be greater then 0.");
        }
        else {
            for(let i = 1; i < Math.floor(n/2); i++) {
                if(n%i == 0) {
                    console.log(`${i}: ${i} X ${n/i}`);
                }
            }
            console.log(`${n}: ${n} X ${1}`);
        }
    }
}
