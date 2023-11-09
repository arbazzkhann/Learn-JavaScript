/******* Use Api with Fetch *******/
const hittingApi = fetch('https://api.github.com/users/arbazzkhann')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// .then((response) => {
//     return response.json()
// })