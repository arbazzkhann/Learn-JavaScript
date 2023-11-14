/****************************************************************************
Super: super keyword refers constructor of inherited class or parent class

*****************************************************************************/

class Car {
    constructor(a) {
        console.log(a, "Parent Class");
    }
}


class Model extends Car {
    constructor(a) {
        super("superClass, ");                           //accessing parent class constructor
        console.log(a, "Child Class")
    }
}


const maruti = new Model("childClass, ");