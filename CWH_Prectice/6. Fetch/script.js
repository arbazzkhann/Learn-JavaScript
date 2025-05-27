let picture = document.querySelector('.picture');
let cardName = document.querySelector('#cardName');
let profession = document.querySelector('#profession');

//Fetch with Promises
fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    const firstName = data.results[0]['name']['first'];
    const lastName = data.results[0]['name']['last'];

    //card picture
    const image = data.results[0]['picture']['large'];
    picture.setAttribute('src', image)

    //card name
    cardName.innerText = `${firstName} ${lastName}`;

    //card profession
    const userProfession = data.results[0]['name']['last'];
    profession.innerText = userProfession;


  })
  .catch((error) => {
    console.error('Error fetching user:', error);
  });

