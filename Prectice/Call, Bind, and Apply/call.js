// Call

function callFunction (city) {
    console.log(`${this.firstName} ${this.lastName} is live in ${city}.`);
}

const myObj = {
    firstName: "Arbaz",
    lastName: "Khan"
}

callFunction.call(myObj, "Delhi");