/*
    Contructor Method: The Constructor() method is called automatically by new, so we can
                       initialize the object there
*/

class Form {
  constructor(name) {
    this.name = name;
  }

  formSubmit() {
    console.log(`${this.name} your form is Submitted`);
  }

  formCancel() {
    console.log(`${this.name} your form is Canceled`);
  }
}

let ajay = new Form("Ajay");

let vijay = new Form("Vijay");

ajay.formSubmit();
vijay.formCancel();
vijay.formCancel();
