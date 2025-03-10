// guess the number
// Video link: https://youtu.be/H88hkdA02tY?t=6041


let randomNumber = Math.floor(((Math.random()) * 100) + 1);

let guess = 0; //only for initialization

guessNumber(guess)

function guessNumber(guess) {
    while(guess !== randomNumber) {
        guess = Number(prompt("Guess the number"));
        if(isNaN(guess) || guess < 1 || guess > 100){
            console.log("try again, number should be 1 to 100");
            continue;
        };
        if(guess > randomNumber) console.log("too high");
        if(guess < randomNumber) console.log("too low");
        if(guess == randomNumber) {
            console.log(`Congratulations🎉 number is ${guess}`);
            break;
        };
    }
}