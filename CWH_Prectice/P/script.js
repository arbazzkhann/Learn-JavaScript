const api = 'https://randomuser.me/api'

// Fetch using async/await
async function fetchData() {
    const apiData = await fetch(api);
    const finalData = await apiData.json();
    console.log(finalData)
}

fetchData();


//fetch using promises
fetch(api)   // Make a GET request
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();            // Convert response to JSON
  })
  .then(data => {
    console.log(data);                // Handle the data
  })
  .catch(error => {
    console.error('There was a problem with the fetch:', error);
  });
