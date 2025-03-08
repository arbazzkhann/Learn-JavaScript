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
        for(let i = 2; i <= Math.floor(n/2); i += 2) {
            if(n%i === 0) {
                console.log("Prime nhi hai.");
                break;
            }
            console.log("Prime hai.");
        }
    }
}

