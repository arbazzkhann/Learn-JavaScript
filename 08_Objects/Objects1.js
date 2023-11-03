//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/m6azhgyCi-k

/********************** Creating Objects *****************************/
//Object keys are always treated as string

//Creating Object (Mehod 1)
const temp_obj = {
    name : "Mukesh",
    "last name": "Ambhani",
    email : "mukesh@yahoo.com",
    location : "New Delhi",
    isLoggedin : false,
    lastLogin : ["Sunday", "Saturday"]
}


/********************** Accessing Objects *****************************/

//Accessing Object (Method 1)
console.log(temp_obj.email);

//Object keys are always treated as string
//Accessing Object (Method 2)
console.log(temp_obj["email"]);  //output => mukesh@yahoo.com
console.log(temp_obj["last name"]);  //output => Ambhani



/********************** Updatation in Objects *****************************/
//*********** Updating Values ***********/
let myNewObject = {
    name : "Arbaz",
    "Last Name" : "Khan",
    email : "arbazkhan@microsoft.com"
}
console.log(myNewObject["email"]); //output => arbazkhan@microsoft.com

myNewObject.email = "arbazkhan@google.com";  //updating email
console.log(myNewObject["email"]);  //output => arbazkhan@google.com

//***********(Object.freeze) Freezing Values ***********/
Object.freeze(myNewObject);  //freezing object

myNewObject.email = "arbazkhan@amazon.com";  //updating email
console.log(myNewObject["email"]);  //output => arbazkhan@google.com //because object is freeze






/********************** Symbol in Object *****************************/
// create a symbol and print as key of object

const mySym = Symbol("Hello, I am Symbol");

const symbolObject = {
    [mySym] : "I am Object",  //Symbol
    Name : "Mohit",
    "Last Name" : "Sharma"
}

console.log(symbolObject);
/*
                    {
                    Name: 'Mohit',
output =>           'Last Name': 'Sharma',
                    [Symbol(Hello, I am Symbol)]: 'I am Object'
                    }
*/

console.log(symbolObject[mySym]);  //printing Symbol
console.log(typeof(symbolObject[mySym])); //output => string





