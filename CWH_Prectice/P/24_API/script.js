

// const requestURL = "https://randomuser.me/api";
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL);
// xhr.onreadystatechange = function() {
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText);
//         console.log(typeof data);
//         console.log(data.followers);
//     }
// }
// xhr.send();





const requestURL = "https://randomuser.me/api";
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function() {
    // console.log(xhr.readyState);
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        // console.log(typeof data);
        console.log(data.results[0]['gender']);
    }
}
xhr.send();
