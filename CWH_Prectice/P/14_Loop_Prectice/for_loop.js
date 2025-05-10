/*
    setting two arrays, first is 'DC Super Heros' name and Second is 'Marvel Super Heros' name.

    Created two functions, first is printing Marvel Super Heros and Second is printing DC Super Heros
    with for-loop.

    if input is "dc heros" then print dc heros name.
    if input is "marvel heros" then print marvel heros name.

*/



let dcSups = ["Superman", "Batman", "Flash"];
let marvelSups = ["Spiderman", "Ironman", "Thor", "Captain America"]

//marvel super heros function
function marvelSuperHeros() {
    for(let i = 0; i < marvelSups.length; i++) {
        console.log(`${i+1}. ${marvelSups[i]}`);
    }
} 

//dc super heros function
function dcSuperHeros() {
    for (let i = 0; i < dcSups.length; i++) {
        console.log(`${i+1}. ${dcSups[i]}`);
    }
}


//input
const input = "marvelheros";


//if-else statement
if (input == 'marvel heros' || "Marvel Heros" || "MarvelHeros" || "marvelheros") {
    marvelSuperHeros();
}
else if(input == 'dc heros' || "DC Heros" || "DCHeros" || "DCheros" || "dcHeros" || "dcheros"){
    dcSuperHeros();
}
else {
    console.log("Wrong Input : Input should be 'marvel heros' or 'dc heros'.");
}

