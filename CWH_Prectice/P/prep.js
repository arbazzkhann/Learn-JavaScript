//JSON (JavaScript Object Notation).
//Lightweight data format.
//It is easy for humans to read and write.


//JSON
let myJSON = [
    {
        "name": "arbaz khan",
        "age": 22,
        "address": {
            "city": "new delhi",
            "pincode": "110091"
        },
        "phone": {
            "first": "+91 87000 56482",
            "second": "+91 97185 52231" 
        }
    }
]

//JSON CONVERSION :-

//JSON.stringify
let stringifyJSON = JSON.stringify(myJSON);

console.log(stringifyJSON);
console.log(typeof stringifyJSON); //string
console.log(myJSON);
console.log(typeof myJSON); //object



//JSON.parse(objectName)
let JSONData = '{"name": "arbaz", "age": 24}';

let convertedJSON = JSON.parse(JSONData);


console.log(JSONData.name)  //Output: 'undefined' because it treated as string not a object
console.log(convertedJSON.name) // Output: arbaz