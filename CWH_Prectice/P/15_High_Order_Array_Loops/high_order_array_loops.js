//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/M0YImBHQsWU

/*******************************************************************/
/************** (for-of) Loop on Array **************/
//for of loop return value of array

let myArr = [1, 2, 3, 4, 5];

for(let val of myArr) {
    console.log(val);
}


/************** (for-of) Loop on String **************/
//it return single-char of string
const str = "Sumbham Bhardwaj";

for(const val of str) {
    console.log(val);
}


/************** Map with (.set) **************/
//Map has Unique Keys: Map has no duplicate value in key

const mmap = new Map();

mmap.set("IN","India");
mmap.set("KR","Korea");
mmap.set("FR","France");
mmap.set("IN","India");  //duplicate will not set


console.log(mmap);


/************** (for-of) Loop on Map **************/
//Destructure of Map: [key, value, whole_array]

/*
Syntax:  for(const [key, value, whole_array]) {
    console.log(key, value, whole_array);
}

*/

for (const [kk, vv, whole_array] of mmap) {
    console.log(kk, ":-" , vv);
}


/************** (for-in) Loop on Array **************/
//it will return index of array

const myNewArr = ["superman", "spiderman", "batman", "ironman"];

for (const kk in myNewArr) {
    console.log("index is : " , kk);
}

/************** (for-in) Loop on Object **************/
let myNewObj = {
    name: "suman",
    city: "jharkhand",
    id: 110
}

for (const kk in myNewObj) {
    console.log(kk);
}

/*** (for-of) Loop on Object ***/
//object is not iterable with for-of loop

// for (const [kk, val] of myNewObj) {
//     console.log(kk);
// }


/************** (for-in) Loop on Map **************/
const newMap = new Map();

newMap.set("name", "rakesh");
newMap.set("id", "102");
newMap.set("city", "haryana");

for (const [kk, vv] in newMap) {    //it will not print because map are not iterable with for-in loop
    console.log(kk, vv)
}


/****************************************************/
/************** (for-each) on Array **************/
/*

Syntax:     object_name (function(item){
            -------code-------;
            })

*/

//******* 1st Way function in parameter of forearch loop
const myNextArr = ["js", "py", "java", "ruby", "c", "cpp"];

myNextArr.forEach( function(item) {
    console.log(item);
})

//******* 2nd Way external function
const myExternalArr = ["delhi", "bihar", "up", "haryana", "telangana"];

function newFunc (i) {
    console.log(i);
}

myExternalArr.forEach(newFunc);  //function reference


/************** (for-each) with Arrow Function **************/
//

myExternalArr.forEach((i) => {
    console.log("city : " , i);
})



/************** (for-each) Prectice **************/
//prectice on array with object with foreach loop

const newArr = [
    {
        name: "manav",
        id: 101,
        city: "new delhi"
    },
    {
        name: "suman",
        id: 102,
        city: "gurgaon"
    },
    {
        name: "sanjay",
        id: 103,
        city: "himachal pradesh"
    }
];

newArr.forEach((item) => {
    console.log(item.name);   //print name of objects
})

newArr.forEach((item) => {
    console.log(item.id);   //print id of objects
})

newArr.forEach((item) => {
    console.log(item.city);   //print city of objects
})