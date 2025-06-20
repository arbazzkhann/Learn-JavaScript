//Slice and Splice

//slice:
//create new array
//not mutating original array
//end-index not counting

let arrForSlice = [2,3,4,3,4,5,6,87,5,3];
const mySlicedArray = arrForSlice.slice(2,5);
console.log(mySlicedArray);  // [4, 3, 4]
console.log("Original slice array: ", arrForSlice);


//splice:
//Returns new array of removed elements from original array
//Mutating original array
//last index will be count

let arrForSplice = [2,34,232,1321,31,23,1,23];
console.log(arrForSplice.length)
const mySplicedArray = arrForSplice.splice(2, 5);
console.log(mySplicedArray);  // [232, 1321, 31, 23]
console.log("Original splice array: ", arrForSplice, "Length: ", arrForSplice.length);

