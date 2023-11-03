/*
There are two Types of Scopes in Java Script
    1. Global Scope
    2. Block Scope
*/



let a = 50;  //global scope

if(true) {
    let a = 10;  //block scope

    console.log(`INNER : ${a}`); //printing block scope //output => INNER : 10
}

console.log(a);  //printing global scope //output => 50
