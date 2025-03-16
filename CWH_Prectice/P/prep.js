//weakmap

let weakMap = new WeakMap();
let myObj = {id: 1};

weakMap.set(myObj, "This is obeject");
console.log(weakMap.get(myObj))