//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/m6azhgyCi-k
/******************************************************************************/
/******************************************************************************/


const marvel_heros = ["Iron Man", "Spider Man", "Thor", "Loki"];
const dc_heros = ["Flash", "Batman", "Super Man"];

/******************** (.concat) Concatinate all heros ****************************/
//*** concat not mauplate original array its return a new array ***
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
// console.log(typeof(all_heros));


/**************** (.push) dc_heros into marvel heros ******************/
//*** (.push) is manupilate original array ***
marvel_heros.push(dc_heros);
console.log(marvel_heros); //output => ['Iron Man','Spider Man','Thor','Loki',[ 'Flash', 'Batman', 'Super Man']]

//accessing element in array
console.log(marvel_heros[2]);  //output => Thor
console.log(marvel_heros[4][0]);  //output => Flash
console.log(marvel_heros[4][1]);  //output => Batman


/********************** (...) Spread Operator ********************/
//*** spread operator is spreading all elements in array and combine together in single array ***
const cars = ["BMW", "Lamborghini", "Bugatti"];
const bike = ["Royal Enfield", "Kawasaki Ninja"];

const vehicles = [...bike, ...cars];
console.log(vehicles);


/********************** (.flat) Method ********************/
/*The flat() method of Array instances creates a new array with all sub-array 
elements concatenated into it recursively up to the specified depth.*/
//syntax : flat(depth)
const newArray = ["Samsung","Xiaomi", "OPPO", "Motorola", ["HP", ["Lenovo", "Techno"], "Dell"]];

const flatArray = newArray.flat(Infinity);
console.log(flatArray);



/***********************************************************************/
/********************** (Array.isArray) ********************/
//it checking variable or parameter is array or not (if yes, then true. if nom then false)
const a = ["AB", 55, 63];
const b = 55;
const c = "Madhav";

console.log(Array.isArray(a));   //output => true
console.log(Array.isArray(b));   //output => false
console.log(Array.isArray(c));   //output => false


/********************** (Array.from) ********************/
//converting a array into single charactor array 
const fArray = ["Madhav", "Kishan", "Gulshan"];
console.log(Array.from(fArray[0]));

console.log(Array.from("Super Man"));


/****(Array.from) Prectice****/
let arr = [];




/********************** (Array.of) ********************/
//converting values into a single array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


/********************** (.fill) Method ********************/
//Syntax : array.fill(value, start, end)
//start and end is index value which is start with 0 and end will not include

let numbers = [4, 7, 4, 6, 7, 7];
let fillNumbers = numbers.fill(5, 0, 4)  
console.log(fillNumbers)  //output => [5, 5, 5, 5, 5, 7]









