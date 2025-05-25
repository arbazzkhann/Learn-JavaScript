//Q1. Print each charactor

// let myStr = "Hello i am String";

// for(let i = 0; i < myStr.length; i++) {
//     console.log(myStr.charAt(i));
// }


//Q2. Print in reverse order
//First Way:
// let myArr = [];

// let myStr = "Hello i am String";
// for(let i = myStr.length - 1; i >= 0; i--) {
//     myArr.push(myStr[i]);
// }

// console.log(myArr.toString().replaceAll(',', ''));


//Second Way:
// let myStr = "Hello i am String";
// let rev = "";

// for(let i = myStr.length - 1; i >= 0; i--) {
//     rev += myStr.charAt(i);
// }

// console.log(rev);


//Q3. Check if string is Pallindrome or not
// let myStr = "malayalam";
// let rev = "";

// for(let i = myStr.length - 1; i >= 0; i--) {
//     rev += myStr.charAt(i);
// }

// if(rev == myStr) {
//     console.log("Pallindrome")
// }
// else {
//     console.log("Not Pallindrome")
// };


//More Efficient way:
// let myStr = "malayalam";
// let i = 0;
// let j = myStr.length - 1;

// let isPallendrome;

// while(i<j) {
//     if(myStr.charAt(i) != myStr.charAt(j)) {
//         isPallendrome = false;
//         break;
//     } 
//     else {
//         isPallendrome = true;
//         i++;
//         j--;
//     }

// }

// if(isPallendrome) console.log("Pallendrome");
// else console.log("Not Pallendrome");


// Q4. Toggle each charater (if Capital then lowercase and if lowercase then capital)

let myStr = "ArBAz kHaN";

let toggle = "";

for(let i = 0; i < myStr.length; i++) {
    let char = myStr.charCodeAt(i);

    if(char >= 65 && char <= 90) {
        toggle += String.fromCharCode(char + 32) 
    }
    else if(char >= 97 && char <= 122) {
        toggle += String.fromCharCode(char - 32)
    }
}
console.log(myStr);
console.log(toggle);