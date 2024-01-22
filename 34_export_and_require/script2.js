// var oneLinerJoke = require('one-liner-joke');

// let e = 100;
// let f = 999;

// let data = require('./script')

// console.log(data.a)
// console.log(data.b)
// console.log(data.c)
// console.log(data.d)


// let joke = oneLinerJoke.getRandomJokeWithTag('stupid');
// console.log(joke)



let figlet = require("figlet");

figlet("ARBAZ", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    // document.write(data);
    console.log(data);
  });