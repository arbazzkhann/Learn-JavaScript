//object
//Object are the premitive data type in javascript
//Object are key-value pairs

//creating object
let myObj = {
    name: "arbaz",
    age: 21
};
console.log('Object1: ', myObj);

//adding new key-value pair
myObj.city = "new delhi";
console.log('Object2: ', myObj);

//deleting key-value pair
delete myObj.city;
console.log('Object3: ', myObj);

//updating value
myObj.age = 22;
console.log('Object4: ', myObj);

//accessing with dot(.) notation
console.log(myObj.name);

//accessing as like array
console.log(myObj['age']);