let score = 455;

//procedural  programming
function increaseScore() {
    score += 45;
    return score;
}

console.log(increaseScore)

//functional Programming (all data is encapsulated)
function increaseScoreWithFunctionalProgramming(score) {
    score += 245;
    return score;
}

console.log(increaseScoreWithFunctionalProgramming(score));  //output: 700
console.log(increaseScoreWithFunctionalProgramming(100));  //output: 345