//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/AViTh83k-IE


// JSON =  JavaScript Object Notation

/************************************************************************************/
/*********************************Object Destructure*********************************/

let course = {
    coursename: "web dev",
    price: "99",
    courseInstructor: "gaurav sharma"
}

// console.log(course["coursename"]);

const {coursename} = course;  //destructure
const {price} = course;     //destructure
console.log(coursename);   //print destructure coursename output => web dev
console.log(price);     //print destructure price output => 99

//defining destructure as user want
const {coursename : cname} = course;  //define 'coursename' as 'cname'
console.log(cname);  //output => web dev

