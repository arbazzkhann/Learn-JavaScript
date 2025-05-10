//https://randomuser.me/api/

async function fetchData() {
    const apiData = await fetch('https://randomuser.me/api/');
    const finalData = await apiData.json();
    const finalName = `${finalData.results[0].name.first} ${finalData.results[0].name.last}`
    const gender = finalData.results[0].gender;
    console.log(`${finalName}, ${gender}`);
}

fetchData()