



class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password + "abc";
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return this.username.toUpperCase()
    }
}

const akhan = new user("arbaz", "arbaz@google.com", "123hell")



// console.log(akhan.encryptPassword())
// console.log(akhan)
console.log(akhan.changeUsername())