//Video Link: https://youtu.be/_tsG9ahYBvk


/***************************************************************
Getter: A getter is a function that gets the value of a specific property. 
        It is used to retrieve the value of a property from an object. Getters are 
        defined using the get keyword and must have an identifier (property name).


Setter: A setter is a function that sets the value of a specific property. 
        It is used to change or modify the value of a property in an object. 
        Setters are defined using the set keyword and must have an 
        identifier (property name).
****************************************************************/


//Getter
let user = {
    firstName: "Arbaz",
    lastName: "Khan",

    getFullName: function() {    //normal function
        return `${this.firstName} ${this.lastName}`
    },

    get fullName() {     //getter
        console.log(this.firstName + " " + this.lastName)
    }

}

console.log(user.getFullName())
user.fullName         //calling with get









//setter
let myObj = {
    firstName: "Harshad",
    lastName: "Mehta",
    id: 101,

    set changeId(value) {          //setter
        this.id = value 
    }

}

myObj.changeId = 502;    //it will set id to 502

console.log(myObj.id)

