//async await

async function fetchRandomData() {
    const rowData = await fetch('https://randomuser.me/api/');
    const data = await rowData.json();

    const title = data.results[0].name.title;
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;

    console.log(`Full Name of user is: ${title} ${firstName} ${lastName}`)
}

fetchRandomData();