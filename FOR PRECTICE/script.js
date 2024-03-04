// https://api.github.com/users/hiteshchoudhary

const image = document.getElementById('image');
const name = document.getElementById('name');
const button = document.getElementById('button');

const fetchData = fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
  return response.json()
})
.then(data => {
  image.setAttribute('src', data.avatar_url);
  name.innerHTML = data.name;
  const userName = data.login; 
  button.setAttribute('href', `https://github.com/${userName}`);
  button.setAttribute('target', '_blank')
  
})



