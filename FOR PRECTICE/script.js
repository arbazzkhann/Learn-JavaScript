// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */

// let nums = [null, {}, 3]; 

// Array.prototype.last = function(arr) {

//     if(arr.lenth != null) {
//         let lastElement = arr.length - 1;
//         return arr[lastElement]
//     } else {
//         return -1;
//     }

// };

// console.log(Array.last(nums));




if (!Array.prototype.last) {
    Array.prototype.last = function() {
      if (this.length === 0) {
        return -1;
      } else {
        return this[this.length - 1];
      }
    };
  }
  
  // Example 1
  let nums1 = [null, {}, 3];
  console.log(nums1.last()); // Output: 3
  
  // Example 2
  let nums2 = [];
  console.log(nums2.last()); // Output: -1