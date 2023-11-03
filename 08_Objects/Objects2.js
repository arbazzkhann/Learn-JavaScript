//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/4lb2pXWWXJI
/***********************************************************************/
/***********************************************************************/

/********************** Inserting external values **********************/
const googleObj = {};  //create null object

//inserting data in object
googleObj.userId = "123abc";    
googleObj.email = "123abc@gmail.com";
googleObj.isLoggedIn = false;

console.log(googleObj);  //print googleObj



/********************** Nested Object **********************/
const newObj = {
    userId : "121aa",
    full_name : {
        first_name : "manav",
        last_name : "sharma"
    },
    email : "121aaa@google.com",
    isLoggedIn : true,
}

console.log(newObj["full_name"]["first_name"]);  //printing only first name
console.log(newObj.full_name.last_name);  //printing only last name
//both are right.



/***************************************************************/
/********************** Combining Objects **********************/
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

//******** 1st Way (wrong Way) ********
//because result gives nested object
const finalObj = {obj1 , obj2 , obj3};
console.log(finalObj);


//******** 2nd Way (Object.assign)********
//Synax: Object.assign(target, source)
/*
    In this example, target is empty object and source are object.;
    All source are getting merge in firs targeted empty object.
*/
const finalObj2 = Object.assign({},obj1, obj2, obj3);
console.log(finalObj2);


//******** 3rd Way (Spread Operator)********
const finalObj3 = {...obj1, ...obj2, ...obj3};
console.log(finalObj3);



/***************************************************************/
/*********************** Object in Array ***********************/

const objectArray = [
    {
        name: "madhav",
        id : "user1",
        email : "m@google.com"
    },
    {
        name : "suman",
        id : "user2",
        email : "s@microsoft.com"
    },
    {
        name : "gaurav",
        id : "user3",
        email : "gaurav@google.com"
    }
];

console.log(objectArray) //printed all objects in array
console.log(objectArray[2]) //printed index[2] object
console.log(objectArray[2].email) //print index[2] email key's value


//printing specific values with loop
for (let i = 0; i < 3; i++) {
    console.log(objectArray[i].id);
}



/******************************************************************/
/************ getting 'keys' and 'values' of Object ***************/
// Its return keys and values in form of "array"

/************ Keys ************/
// Syntax: (Object.keys(object_name))

const randomObject = {   //creating object
    name : "mayank",
    id : "user123",
    email : "mayank@google.com",
    isLoggedIn : false,
    "last login" : ["sunday", "friday"]
}

const keyOfObject = Object.keys(randomObject);
console.log(keyOfObject);


/************ values ************/
// Syntax: (Object.values(object_name))

const valuesOfObject = Object.values(randomObject);
console.log(valuesOfObject);



/******************************************************************/
/************ finding object having property ***************/
// It gives result in Boolean
// Syntax: object_name.hasOwnProperty("property_name");

const propertObject = {
    name: "super man",
    id: "user122",
    email: "superman@google.com",
    isLoggedIn: true
}

console.log(propertObject.hasOwnProperty("isLoggedIn")); //output => true
console.log(propertObject.hasOwnProperty("isLoggedOut")); //output => false
