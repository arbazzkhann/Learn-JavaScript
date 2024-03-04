const fApi = fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');

fApi.then((response) => {
    response.json();
}).then((response) => {
    data = response['date']
    console.log(data);
})


// console.log(finalApi);


