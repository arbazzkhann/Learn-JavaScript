//sets
//it stores stores unique values

let set = new Set();

set.add(10)
set.add(10) //duplicate not stores
set.add(10) //duplicate not stores
set.add(20) 
set.add(30) 
set.add(40) 

console.log(set);  //prints whole set
console.log(set.has(20)); //finding has 20
console.log(set.size); //size of set
set.delete(40); //deleting set value
console.log(set); //prints whole set