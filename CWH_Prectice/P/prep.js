//filter

let myClassObject = [
    {
        name: "Arvind",
        class: 10,
        rollNo: 1
    },
    {
        name: "Vivek",
        class: 11,
        rollNo: 2
    },
    {
        name: "Manish",
        class: 9,
        rollNo: 3
    },
    {
        name: "Sourav",
        class: 12,
        rollNo: 4
    },
    {
        name: "Saquib",
        class: 9,
        rollNo: 5
    },
    {
        name: "Suman",
        class: 10,
        rollNo: 6
    }
]

const c = 10;

myClassMates = myClassObject.filter((i) => {
        return (i.class == c)
    })

const arrLength = myClassMates.length;

myClassMates.forEach(element => {
    console.log(`The students of class ${c}th is`, element.name)
});

console.log(`Length of the array is ${arrLength}`)
