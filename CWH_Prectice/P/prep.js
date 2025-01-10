// this keyword and current context

let myObj = {
    name: "Arbaz",
    price: 399,
    welcomeMessage: function() {
        // console.log(this)
        function a() {
            console.log(this)
        }

        a()
    }
    
}

myObj.welcomeMessage()
console.log(this)