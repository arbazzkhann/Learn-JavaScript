const datas = [
    {name: "Arbaz", profession: "Web Developer"},
    {name: "Ajay", profession: "Software Engineer"}
]

function getDatas() {
    setTimeout(()=> {
        let output = ''
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createData(newData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData)
            let error = false;
            if(!error) {
                resolve();
            }
            else {
                reject("Kuch Sahi nhi hai!!!");
            }
        }, 2000)
    })


}

createData({name: "Vivek", profession: "Web Developer"}).then(getDatas).catch(err => document.body.innerHTML = `<h2>${err}</h2>`);