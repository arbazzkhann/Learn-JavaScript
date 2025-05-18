function user(firstName, lastName, age) {
    return {
        fullName: `${firstName} ${lastName}`,
        birthYear: function (){
            return date.getFullYear() - age;
        }
    }
}

let date = new Date();

let user1 = user("Arbaz", "Khan", 22);
let user2 = user("Shubham", "Sharma", 24);
let user3 = user("Madhav", "Gourav", 21);
let user4 = user("Jatin", "Goswami", 21);
console.log(user1.fullName);
console.log(user2.fullName);
console.log(user3.fullName);
console.log(user4.fullName);