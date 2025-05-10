//Api: https://randomuser.me/api/

async function fetchData() {
    const apiData = await fetch("https://randomuser.me/api/");
    const finalData = await apiData.json();
    console.log(finalData)
}

fetchData()