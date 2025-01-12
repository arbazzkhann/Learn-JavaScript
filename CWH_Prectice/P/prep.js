//reduce

let myClassObjects = [
    {
        name: "English",
        price: 579
    },
    {
        name: "Hindi",
        price: 189
    },
    {
        name: "Maths",
        price: 349
    },
    {
        name: "Science",
        price: 399
    },
    {
        name: "Social Science",
        price: 299
    }
]

const myFinalPrice = myClassObjects.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice.price
}, 0);

console.log(myFinalPrice)