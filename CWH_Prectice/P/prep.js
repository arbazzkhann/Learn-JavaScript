//async await

let nameHeading = document.querySelector('.nameHeading');

let userFullName = '';

async function fetchRandomData() {
    const rowData = await fetch('https://randomuser.me/api/');
    const data = await rowData.json();

    const title = data.results[0].name.title;
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;

    userFullName = `${title} ${firstName} ${lastName}`

    nameHeading.innerText = userFullName

}

fetchRandomData();

nameHeading.innerText = userFullName

