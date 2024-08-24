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