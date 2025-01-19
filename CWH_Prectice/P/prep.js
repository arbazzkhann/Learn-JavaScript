//promises

const myPromise = new Promise((res, rej) => {
    if(true) {
        return res();
    }
    else {
        return rej()
    }
})

myPromise
.then(function(c) {
    console.log(`Resolve ho gaya.`)
})
.catch(function() {
    console.log("Resolve nhi hua.")
})
