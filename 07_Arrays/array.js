//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/cejBux2gtEE
/******************************************************************************/
/******************************************************************************/


//********* Array Initialization *********
let arr = [2, 5, 6, 7, 9];
console.log(arr);  //printing array
console.log(typeof(arr));  //printing type of array => object


//********* Array Initialization as Object *********
let arr2 = new Array(2, 3, 7, 8, 'c', "madhav");
console.log(arr2);
console.log(typeof(arr2));


//********* Accessing Array with Index *********
//Index is Starting with 0
console.log(arr[3]);  //output => 7
console.log(arr2[5]); //output => madhav


//********* Printing Array with for-loop *********
for (let i = 0; i <= 5; i++) {
    console.log(arr2[i]);
}

/***************************************************************************************/
/********************************* Operations on Array *********************************/
/***************************************************************************************/

//(.push()) method
//its method is inserting a new element at last in array.
arr2.push(77);  //insert 77
arr2.push(89);  //insert 89
arr2.push(22);  //insert 22
console.log(arr2);

//(.pop()) method
//pop is deleting last value in array.
arr2.pop();  //deleting 22
arr2.pop();  //deleting 89
console.log(arr2);



//(.unshift())
//inserting value at the starting in array.
//its shifting all elements to right.
//its un-usefull because its shifting all elements to right. therefore index will be changed.
arr2.unshift(9, 89);  //inserting 9 and 89 at the start
console.log(arr2);

//(.shift())
//deleting value at starting in array.
arr2.shift();  //delete 89
arr2.shift();  //delete 9
console.log(arr2);



//(.includes())
//its checks element is available in the array.
console.log(arr2.includes(9));  //output => false
console.log(arr2.includes(2));  //output => true



//(.indexOf())
//its give index of element in array.
console.log(arr2.indexOf("madhav"));  //output => 5
console.log(arr2.indexOf(99));  //output => -1 //because its don't have 99 in array



//(.join())
//its converting array into string.
let newArray = arr2.join();
console.log(newArray);  //output => 2,3,7,8,c,madhav,77
console.log(typeof(newArray));  //output => string



/******************************* Slice and Splice *************Vey Important Question***********/
let myArr = [2, 5, 3, 7, 9, 8];
console.log("A" , myArr);  //original Array


//(.slice)
//create new array
//not mutating original array
//end-index not counting
let originalArray = ["Spiderman", "Superman", "Ironman", "Batman"];

let slicedArray = originalArray.slice(1,2);
console.log(slicedArray);        //sliced Array
console.log("B", originalArray);    //original Array



//(.splice)
//Returns new array of removed elements from original array
//Mutating original array
//last index will be count
//******splice array me se cut kr leta hai elements ko ******
let splicedArray = originalArray.splice(1,2);    
console.log(splicedArray);       //spliced Array
console.log("C", originalArray);   //original Array

