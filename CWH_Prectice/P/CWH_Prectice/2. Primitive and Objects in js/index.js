/*
There are two types of data types 
    1. Primitive data type.
    2. Non-Primitive data type.

1. Primitive data types are already declared in javascript
    there are 7 types of premitive data types:
        i. null
        ii. Number
        iii. Boolean
        iv. BigInt
        v. String
        vi. Symbol
        vii. undefined

    Note: You can learn that as "NNBBSSU".

2. Non-Primitive data types are 'objects' in javascript.


*/


//Primitive data types in Javascript
const a = null;
const b = Number(3125);
const c = Boolean(true);
const d = BigInt(545) + BigInt(33);
const e = String("I am string.");
const f = Symbol("I am Symbol");
const g = undefined

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

console.log(" ")

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))


//Non-Primitive data types
//Object

const item = {
    name: "arbaz",
    class: "12th",
    rollNumber: 1233
}

console.log(item.name)
console.log(item["class"])
console.log(item.rollNumber)