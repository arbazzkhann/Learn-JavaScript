//Map:
//return new array
//return keyword is needed when in curly braces

let myArr = [
    {firstName: "Aman", id: 101},
    {firstName: "Suman", id: 102},
    {firstName: "Madhav", id: 103},
    {firstName: "Sanjay", id: 104}
];


const firstNames = myArr.map((item) => item.id);

console.log(firstNames);


//filter:
const filterdArray = myArr.filter((item) => {
    return (item.id > 102)
});

console.log(filterdArray);