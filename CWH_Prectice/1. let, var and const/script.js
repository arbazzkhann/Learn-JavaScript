
var a = 10;
var b = "Arbaz";
var c = null;
var d = undefined;
const e = "9"

{
    let b = 'this'
    console.log(b)
}

console.log(b)
console.log(e)


//**********var v/s let*********/
//1. var is globally scoped while let & const are blocked scoped.
//2. var can be updated & re-declared within its scope.
//3. let can be updated but not re-declared.
//4. const can neither be updated nor be re-declared.
//5. var variables are initialized with undefined whereas let and const variable are not initialized.
//6. const must be initialized during declaration unlike let and var.