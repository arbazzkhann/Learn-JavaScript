let myObj = {
    name: "arbaz"
}

console.log(Object.prototype.hasOwnProperty.call(myObj, 'age'));

myObj.age = 22;
console.log(Object.prototype.hasOwnProperty.call(myObj, 'age'));