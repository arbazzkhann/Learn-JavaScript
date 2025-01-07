const propertObject = {
    name: "super man",
    id: "user122",
    email: "superman@google.com",
    isLoggedIn: true,
}

console.log(propertObject.hasOwnProperty("isLoggedIn")); //output => true
console.log(propertObject.hasOwnProperty("isLoggedOut")); //output => false
