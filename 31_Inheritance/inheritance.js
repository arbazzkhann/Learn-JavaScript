class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`User-Name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log(`New Course Added by ${this.username}`)
    }
}


const chai = new Teacher("chai", "chai@fb.com", "122")
const tea = new Teacher("tea", "tea@yt.com", "122")

console.log(chai);
console.log(tea);

