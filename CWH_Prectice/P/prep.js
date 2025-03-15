let person = { name: "Arbaz", age: 25 };
let jsonString = JSON.stringify(person); // Convert object to string
console.log(jsonString); // '{"name":"Arbaz","age":25}'

let jsonObject = JSON.parse(jsonString); // Convert string back to object
console.log(jsonObject.name); // "Arbaz"
