//Destructuring in JS

/************************ Example of Array ************************/
const color = ['red', 'blue', 'green', 'yellow', 'pink', 'purble', 'black'];



/************************ Example of Object ************************/
const user = {
    name: "Arbaz",
    age: 21,
    address: {
        city: {first: "Mayur", second: "Vihar"},
        state: 'New Delhi'
    }
}


/************************ Array Destructuring ************************/

// first method without skip
// const [color1, color2, color3, color4, color5, color6, b] = color;

//second method with skipping with (,)
// const [,,,,, color6, b] = color;

// console.log(b);


/************************ Array Destructuring as Object ************************/

const {3: colorName} = color;
console.log(colorName)


/************************ Object Destructuring ********************************/
// const {name, age, address: {city: {first, second}}} = user;

const {address} = user;
const {city} = address;
const {first} = city;
const {second} = city;


console.log(first, second)


/*********************** Destructuring with function ***********************/

const myObj = {
    name: "Arbaz",
    age: 21,
    address: {
        city: "Mayur Vihar",
        state: "New Delhi"
    },
    phone: +918700056482
}

function printer({name, age, address: {city}}) {
    console.log(`Your Name is ${name}, age is ${age} and you are from ${city}`);
}


printer(myObj)


/*********************** Destructuring array with function ***********************/

const myArr = ['Superman', "Batman", "Spiderman", "Ironman", "Thor", "Thanos", "Black Adam", "Flash", "Black Panther"];

function printArr([superHero1, , , , , superHeroN]) {
    console.log(superHero1);
    console.log(superHeroN);
}

printArr(myArr)