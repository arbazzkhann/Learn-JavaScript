function createdUser (firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getAgeYear () {
            return new Date().getFullYear() - age;
        }
    }
    return user
}

const user1 = createdUser("Arbaz", "Khan", 22);


