//YouTube Channel : Chai aur Code
//YouTube Video : https://www.youtube.com/watch?v=fozwNnFunlo

let firstName = "Arbaz";
let lastName = "Khan";

//string addition (Old Method)
console.log(firstName + lastName);

//contatinate using backticks (``) // (String Interpolation)
console.log(`Hello My Nam is ${firstName} ${lastName}`);


/*************************************** Prectice ***************************************/
const gameName = new String("Battle Grounds Mobile India");  //creating string as an object


console.log(gameName); //print whole string

console.log(gameName.__proto__); //it results empty object "{}"

console.log(gameName.length); //give length of string

console.log(gameName.toUpperCase());  //give capitalize string

console.log(gameName.toLowerCase());  //give small letter string

console.log(gameName.charAt(4)) //give character at position

console.log(gameName.indexOf('a')) //give position/index of charactor

console.log(gameName.substring(0,2));  //give substring on a string

console.log(gameName.slice(0, -3));  //give a sliced of string //you can use negative values only in slice

console.log(gameName.trim()); //it trim left and right spaces //mostly used in url

console.log(gameName.replace(' ', '-')); //it replace string only single time

console.log(gameName.replaceAll(' ', '-')); //it replace string in whole string 

console.log(gameName.includes("Mobile"))  //it search string in string  //it gives "true" or "false"

console.log(gameName.split(' ')); //split convert string to an array basis on its parameter









































/*********************** Learn That ************************* 
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()*/