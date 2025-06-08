let fullName = document.querySelector('.name');
let city = document.querySelector('.city');

const myApi = 'https://randomuser.me/api/';

fetch(myApi).then(data => {
    return data.json();
})
.then(data => {
    fullName.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
});