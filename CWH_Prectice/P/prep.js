//recursion
//when a function call itself

function printNum(n) {
    if(n > 10) {
        console.log("Done!");
        return;
    }
    console.log(n);
    printNum(n+1);  //recursive call
}

printNum(1)