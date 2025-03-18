function checkAge(age) {
    if(age < 18) {
        throw new Error("You must be 18 or older.");
    }
    console.log("Access Granted");
}

try {
    checkAge(16)
} catch (error) {
    console.log(`Error: ${error.message}`);
}