//day
let day = new Date().getDay();

//month
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = new Date().getMonth(); // returns 0-11
let month = monthNames[currentMonth];

//year
let year = new Date().getFullYear();

document.querySelector("h1").innerText = `${day} ${month} ${year}`;
