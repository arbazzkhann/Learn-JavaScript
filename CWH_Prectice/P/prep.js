//promise 2

const myNewPromise = new Promise((res, rej) => {
    return res("Sabse pehle ghar aao.");
})

myNewPromise
.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Gate kholo aur gate lagao.");
    })
})
.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Khana pakao, khana khao.");
    })
})
.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Sojao kyunki tum thak chuke ho.");
    })
})
.then((data) => {
    console.log(data);
})