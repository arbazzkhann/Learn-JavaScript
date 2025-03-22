let buffer = new ArrayBuffer(16);  //creates a 16-bytes buffer

let intArray = new Int32Array(buffer) //creates a typed Array from buffer

intArray[0] = 42;
console.log(intArray[9]) //undefined
console.log(intArray[0]); //42