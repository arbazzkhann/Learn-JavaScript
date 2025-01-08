//Rest parameters

const returnTotalPrice = (...price) => {
    
    let sum = 0;

    for(let i = 0; i < price.length; i++) {
        sum = sum + price[i];
    }

    return sum;

}


let aata = 300;
let daal = 450;
let chawal = 360;
let dalia = 120;
let makkhan = 360;

const totalPrice = returnTotalPrice(aata, daal, chawal, dalia, makkhan);

console.log(totalPrice)


