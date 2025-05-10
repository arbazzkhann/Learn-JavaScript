//************************************************************
//*********************** "Math" Library ***********************
//************************************************************

//YouTube Channel : Chai aur Code
//Video Link : https://youtu.be/_KqpeDc47Ro

//(.abs) Absolute Value // give only positive number
console.log(Math.abs(-5)); //output => 5
console.log(Math.abs(5)); //output => 5


//(.round) RoundOff Value 
console.log(Math.round(4.53));  //output => 5
console.log(Math.round(4.49));  //output => 4


//(.ceil) RoundOff Value (to Maximum Value)
console.log(Math.ceil(4.01)); //output: => 5 //number se thoda sa bhi bada hua to successor number print hoga.


//(.floor) RoundOff (to Minimum Value)
console.log(Math.floor(4.99)); //output => 4 //output will be lowest


//(.pow) Power of Number 
console.log(Math.pow(2,7)); //2^7 => 128


//(.sqrt) Square Root
console.log(Math.sqrt(25)); //Square Root of 25 => 5


//(.min) Find Minimum Value
console.log(Math.min(2,5,6,3,1,-7,0,3,-2)); //Minimum Value => -7


//(.max) Find Maximum Value
console.log(Math.max(2,5,6,3,1,-7,0,3,-2)); //Maximum Value => 6


//(.random) Random Values
console.log(Math.random()); //if parameter are empty then the values are always lies between 0 and 1.




//Prectice --->>> Printing Random Values between 10 and 20
let min = 10; 
let max = 20;

console.log(Math.floor ( ( Math.random() * 10 ) + (max-min) ) );
