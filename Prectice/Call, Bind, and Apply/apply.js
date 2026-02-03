// apply

function applyFunction (city1, city2, city3) {
    console.log(`${this.firstName} ${this.lastName} is live in ${city1}, ${city2}, ${city3}`);
}

const myObj = {
    firstName: "Arbaz",
    lastName: "Khan"
}

const cities = ["Delhi", "Banglore", "Mumbai"];

applyFunction.apply(myObj, cities);