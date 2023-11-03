//YouTube Channel : Chai aur Code
//Youtube Video Link : https://youtu.be/7gwc-1czolw

//Stack : ----works on premitive datatypes.
// ----It copies the Original Variable.
        // 1. Null
        // 2. Number
        // 3. Symbol
        // 4. String
        // 5. Boolean
        // 6. Bigint
        // 7. Undefined 

//Head : ----works on Non-Premitive Datatypes.
// ----It Give Reference of Original Variable. 
        // 1. Objects
        // 2. Arrays
        // 3. Function

/*************************** Stack ***************************/
let myName = "ARBAZ";  //Variable initialize

let copyName = myName;  //Initialize copyName and Assign myName
copyName = "AK";  //Change copy Vairable

console.log(myName);  //Original Name
console.log(copyName); //copy name That changed after initialization


/*************************** Heap ***************************/
// Change Original Values through Reference Variable.

//Object Initialize
let userOne = {     
    userEmail:"manav@youtube.com",
    userUPI: "manav@ybl"
}


let userTwo = userOne; //create userTwo and assign userOne
userTwo.userEmail = "arbaz@google.com"  //change Email


console.log(userOne);  //Print Original Variable but it changed after userTwo initialization.
console.log(userTwo);  





/**************************** Hindi me Summary ***************************     

Stack : Stack copy banata hai original variable ki and jab jam uski values change ya edit krte
        hai to original values me koi farak nhi padta.

Heap :  Heap variable ko copy nhi krta copy variable ko original variable ka reference de deta
        hai. jab kam copy variable me kuch bhi change krte hai to vo original variable me bhi
        changes krta hai.

*/