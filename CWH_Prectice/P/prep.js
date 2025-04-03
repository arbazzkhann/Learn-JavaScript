let name = "outer"

const myObj = {
    name: "arbaz",
    show: function(name) {
        this.name = "madhav"
        setTimeout(function(name) {
            console.log(this.name)
            console.log(name)
        }, 1000)
    }
}

myObj.show('para')