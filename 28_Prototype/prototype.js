//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/uMI5cNeHTOc

/*****************************************************************/
/*****************************************************************/

// function multiplyBy5(num) {
//     return num*5
// }

// console.log(multiplyBy5.prototype)




function chaiPrice(name, price) {
    this.name = name;
    this.price = price;
}


chaiPrice.prototype.increaseChaiPrice = function() {
    this.price++;
}

chaiPrice.prototype.printPrice = function() {
    console.log(`chai Price is ${this.price}`);
}

const chai = new chaiPrice("Madhav", 25)
const tea = new chaiPrice("Suman", 250)


chai.printPrice()
tea.printPrice()

