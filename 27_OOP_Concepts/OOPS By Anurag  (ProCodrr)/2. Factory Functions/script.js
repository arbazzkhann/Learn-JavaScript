//Polimorphism
function getAgeYear() {
    return new Date().getFullYear() - this.age;
}

function createUser (firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getAgeYear
    }
    return user
}

const user1 = createUser("Arbaz", "Khan", 22);
const user2 = createUser("Ravi", "Negi", 45);
