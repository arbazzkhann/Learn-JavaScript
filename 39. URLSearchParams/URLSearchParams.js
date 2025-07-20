// Define a query string (like the part after '?' in a URL)
const mainURL = "?name=arbaz&age=22&";

// Create a URLSearchParams object from the query string
// This allows us to work with query parameters easily (get, set, loop, etc.)
const URLParams = new URLSearchParams(mainURL);

// ------------------------- GETTING VALUES ------------------------- //

// Get the value of the 'name' parameter from the query string
const name = URLParams.get('name');

// Get the value of the 'age' parameter from the query string
const age = URLParams.get('age');

// Print the values to the console
console.log(name, age);  // Output: arbaz 22

// ------------------------- CHANGING VALUES ------------------------- //

// Change the value of the 'name' parameter to 'farhan'
URLParams.set('name', 'farhan');

// Get the updated 'name' value
const name2 = URLParams.get('name');

// Print the updated name to the console
console.log("Name after set: ", name2); // Output: Name after set:  farhan

// ------------------------- LOOPING THROUGH PARAMETERS ------------------------- //

// Loop through all query parameters using for...of
// Each iteration returns [key, value] pair
for (const [key, value] of URLParams) {
    console.log(`${key} => ${value}`);
    // Example output:
    // name => farhan
    // age => 22
}
