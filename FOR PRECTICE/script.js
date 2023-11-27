//closures


function abcd() {
  let x = 12;
  return function() {
    console.log(x);
  }
}

let ans = abcd();   

abcd();    //it will only call
ans();     //it will print answer