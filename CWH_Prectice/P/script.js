const api = 'https://randomuser.me/api'

// Fetch using async/await
async function fetchData() {
    const apiData = await fetch(api);
    const finalData = await apiData.json();
    console.log(finalData)
}

fetchData();