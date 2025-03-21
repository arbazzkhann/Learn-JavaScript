//lexical scope.
//A function inside another function can access variables of their parents is known as lexical scope.

function outer() {
    let name = "Javascript";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();