/*
Static: the static keyword is used to declare elements (methods, variables, properties) 
        within a class or context that belong to the class itself rather than to instances 
        created from that class. 

************************************************************************/
/**************** static keyword ****************/

class MainUser {
    constructor(name, city, post, salary) {
        this.name = name;
        this.city = city;
        this.post = post;
        this.salary = salary;
    }

    static displaySalary() {
        console.log(`Your Salary is ${this.salary}`);
    }
}


class user extends MainUser {
    printName() {
        console.log(`Your Name is ${this.name}`);
    }

    printCity() {
        console.log(`Your City is ${this.city}`);
    }
}

const mayank = new user("Mayank", "UP", "SDE1", 110000)

mayank.printName();
mayank.printCity();
mayank.displaySalary();         //it can't access salary method because of static keyword