function convertToArray() {
    let argsArray = Array.from(arguments);
    console.log(argsArray); // Output: [1, 2, 3, "hello"]
  }
  
  convertToArray(1, 2, 3, "hello");
  