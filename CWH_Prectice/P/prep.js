//promise

const myNewPromise = new Promise((res, rej) => {
    if(true) {
        return res("Resolve ho gaya.");
    }
    else {
        return rej("Resolve nhi hua.");
    }
})


myNewPromise
.then((response)=> {
    console.log(response);
})
.catch((response) => {
    console.log(response);
})