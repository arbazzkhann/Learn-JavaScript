const datas = [
    {name: "Arbaz", professional: "Web Developer"},
    {name: "Ajay", professional: "Software Engineer"}
]

function getDatas() {
    let output = '';
    setTimeout(()=> {
        datas.forEach((data, index)=>{
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createData(newData, callback) {
    setTimeout(() => {
        datas.push(newData)
        callback()
    }, 2000);
}

createData({name: "Vivek", profession: "Web Developerz"}, getDatas)