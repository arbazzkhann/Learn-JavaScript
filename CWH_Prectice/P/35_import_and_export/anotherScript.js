const calcExp = (num, pow) => {
    let final = 1;

    for(let i = 1; i <= pow; i++) {
        final *= num;
    }

    return final;
}

// variable
let a = "Arbaz Khan";


// object
let fObject = {
    name: 'arbaz khan',
    id: 101
}

// array
let myArr = [
    {
        name: "raghav",
        id: 501
    },
    {
        name: "sumit",
        id: 502
    },
    {
        name: "suhail",
        id: 503
    }
]

export {calcExp, a, fObject, myArr};
// export default calcExp;


