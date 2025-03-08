//Find number is "Prime" or "Not"
//Video link: https://youtu.be/H88hkdA02tY?t=3042

const n = prompt("Enter number");

if(n == null) {
    console.log("cancelled");
}
else {
    if(isNaN(n)) {
        console.log("Enter Valid input, number should be in integer format.");
    }
    else {
        console.log(isPrime(n));    
    }
}

//Video link: https://youtu.be/H88hkdA02tY?t=3766
function isPrime(n) {
    if(n <= 1) return false;
    if(n == 2) return true;
    if(n%2 == 0) return false;
    for(let i = 3; i <= Math.floor(n/2); i +=2 ) {
        if(n%i == 0) return false;
    }
    return true;
}
