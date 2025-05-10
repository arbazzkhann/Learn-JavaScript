const api = 'https://randomuser.me/api';

fetch(api)
.then((data) => data.json())
.then((data) => {
  console.log(data) 
})