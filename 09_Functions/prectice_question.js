/*
Question: create a array with objects having id, name and city. and then
          create a function that having array as parameters and
          return id of objects in array.
*/



function fetchId(idArray) {
    let newArr = [];
    for(let i = 0; i < idArray.length; i++){
        // let id[] =  idArray[i].id
        newArr.push(idArray[i].id);
    }
    return newArr;
}

let mainArr = [
    {
        id: "101",
        name: "madhav",
        city: "pune"
    },
    {
        id: "102",
        name: "suman",
        city: "mumbai"
    },
    {
        id: 103,
        name: "ashish",
        city: "delhi"
    },
    {
        id: 104,
        name: "rakesh",
        city: "rajasthan"
    }
]

let finalId = fetchId(mainArr);
console.log(finalId);

