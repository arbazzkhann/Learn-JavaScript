let fetchedData = fetch("https://api.github.com/users/arbazzkhann");

fetchedData.then(function(data) {
    return data.json();
}).then((values) => {
    console.log(values);
})