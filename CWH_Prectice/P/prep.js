//Closures in js

/*
    a function that has access to the variables and parameters 
    of the function it's defined within
*/

function outer() {
    var b = 10;
    function a() {
        
        function c() {
            console.log(b);
        }
        c();
    }
    
    a();
}

outer()