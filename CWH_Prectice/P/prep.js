//data types :

/* Learn as 'NNBBSSU'
1. Number
2. Null
3. BigInt
4. Boolean
5. String
6. Symbol
7. Undefined
*/

let number = 33;
console.log(typeof(number)); //Number

let nullDataType = null; 
console.log(typeof nullDataType); //object
console.log(null instanceof Object); // false (null is NOT an actual object)

let bool = true;
console.log(typeof bool); //boolean

let bigInteger = 312312638127371238n;
console.log(typeof bigInteger); //BigInt

let nameString = "Hello";
console.log(typeof nameString); //String

let myId = Symbol("334");
console.log(typeof myId); //Symbol
let myId2 = Symbol("334");
console.log(myId === myId2); //false

let undefinedData = undefined;
console.log(typeof undefinedData); //undefined
let score; //not defined
console.log(typeof score)

