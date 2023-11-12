
/* 
**Filter method return value that are true for given condition
**Filter will create a new array 

Synyax: _arr(callBack_function) {
            **code**
        })


*/

let myArr = [1,23,3,4,5,3,3,42,33,54,5]

let filterArr = myArr.filter((value) => {
    return value < 10
})

console.log(filterArr)