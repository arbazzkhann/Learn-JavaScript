//Set
//Set is a collection of unique values (no duplicates);

let set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(50);

console.log(set.size); //size of set
console.log(set.has(20)); //true
console.log(set.has(99)); //false

set.delete(50); //deleting set element
console.log(set.size); //size of set
console.log(set.has(50)); //false

console.log(set); //printing whole set