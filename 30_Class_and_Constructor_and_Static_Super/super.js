/****************************************************************************
Super: super keyword refers constructor of inherited class or parent class

*****************************************************************************/

class Car {
    constructor() {
        console.log("Parent Class");
    }
}


class Model extends Car {
    constructor() {
        super()                             //accessing parent class constructor
        console.log("Child Class")
    }
}


const maruti = new Model();