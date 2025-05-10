//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/VQlY-X_eeTE

/************************************************/
/************************************************/

//**** Creating New Element ****
let newElement = document.createElement("li");  //creating New Element
newElement.appendChild(document.createTextNode("python"))  //adding into newElement
document.querySelector(".ul").appendChild(newElement)   //set to .ul


//**** Repalce/Change Element ****
const nextElement = document.createElement("li");

// nextElement.appendChild(document.createTextNode("HHELLO"))

const nextText = document.createTextNode("Changed");
const final = nextElement.appendChild(nextText);

document.querySelector("#js").replaceWith(nextElement);



// function addLanguage(langName) {
//     let lang = document.createElement("li")
//     lang.appendChild(document.createTextNode(langName));

//     document.querySelector(".ul").appendChild(lang);
// }

// addLanguage("ruby")




// const button = document.querySelector(".button");
// const container = document.querySelector(".container");

// button.addEventListener('click',() => {
//     let el = document.createElement("h1");
//     el.innerText="ARBAZ KHAN";
//     container.appendChild(el);
// })



// let myH1 = document.createElement("h1");
// let myText = document.createTextNode("HELLO");

// myH1.appendChild(myText)
// document.querySelector(".div").appendChild(myH1)