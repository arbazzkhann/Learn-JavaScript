/*
Classes: In Object Oriented Programming a class is an extensible program-code template for 
         Objects, providing initial values for state (member variables) and implementation
         of behaiour (member Functions).

Syntax: class className {
            constructor() {...code..}
            method1() {...code...}        
            method2() {...code...}        
        }         

***************************************************************
***************************************************************/



// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password + "abc";
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return this.username.toUpperCase()
//     }
// }

// const akhan = new user("arbaz", "arbaz@google.com", "123hell")



// // console.log(akhan.encryptPassword())
// // console.log(akhan)
// console.log(akhan.changeUsername())






/************** Prectice **************/
// class railwayForm {
//     submit() {
//         console.log("Form Submitted");
//     }

//     cancel() {
//         console.log("Form Cancelled");
//     }
// }


// let amit = new railwayForm();
// let manav = new railwayForm();


// amit.submit();
// manav.submit();
// manav.cancel();






/************** Prectice **************/
// class railwayForm {
//     submit(name) {
//         alert(`Form Submitted : ${name}`);
//     }

//     cancel(name) {
//         document.write(`Form Canceled : ${name}`);
//     }
// }


// let amit = new railwayForm();
// let manav = new railwayForm();


// const name1 = "amit";
// const name2 = "manav";

// amit.submit(name1.toUpperCase());
// manav.submit(name2.toUpperCase());
// manav.cancel(name2.toUpperCase());






/************** Prectice **************/
// class railwayForm {
//     submit(name) {
//         alert(`Form Submitted : ${name}`);
//     }

//     cancel(name) {
//         document.write(`Form Canceled : ${name}`);
//     }
// }


// let amit = new railwayForm;        //class into variable
// let manav = new railwayForm;


// const name1 = "amit";    //declaring name in variables
// const name2 = "manav";



// amit.submit(name1.toUpperCase());     
// manav.submit(name2.toUpperCase());     //calling methods
// manav.cancel(name2.toUpperCase());









/***************************************************/
/*Ques: if submit button click then alert shows "'Name' Your Form is Submitted" and when cancel button
        clicked then alert shows "'Name' Your Form is Canceled"

*/
// class Form {
    
//     formSubmit(name) {
//         alert(`${name} your form is Submitted.`);
//     }

//     formCancel(name) {
//         alert(`${name} your form is Cancelled.`);
//     }

// }

// const ajay = new Form();
// const ajayName = "Ajay";

// const submitButton = document.querySelector("#submit");
// const cancelButton = document.querySelector("#cancel");

// submitButton.addEventListener("click", () => {
//     ajay.formSubmit(ajayName);
// });

// cancelButton.addEventListener("click", () => {
//     ajay.formCancel(ajayName);
// });




/******************** Prectice ***********************/
class form {
    formSubmit() {
        console.log(`${this.name} your form is cencelled for train no: ${this.train}`);
    }

    formCancel() {
        console.log(`${this.name} your form is submitted for train no: ${this.train}`);
    }

    fill(name, train) {
        this.train = train;
        this.name = name.toUpperCase() 
    }

}


const arbazForm = new form();
const madhavForm = new form();
const sureshForm = new form();
const gouravForm = new form();

arbazForm.fill("arbaz", 11111);
madhavForm.fill("madhav", 22222);
sureshForm.fill("suresh", 33333);
gouravForm.fill("gourav", 55555);

arbazForm.formSubmit()
madhavForm.formSubmit()
sureshForm.formSubmit()
gouravForm.formSubmit()