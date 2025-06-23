# Classes in JS

### Syntax:
```js
class class_name {
    //statements
}
```

### Keypoints:
* Classes **don't have hoisting**.
* Have a **constructor function**.
* Syntactic sugar over constructor functions.
* Supports **inheritance using extends keyword**.
* Use **super()** to call the parent constructor.
* Methods defined in class are non-enumerable.
* Class body is always executed in strict mode.
* Can define **static methods using static keyword**.
* **Private fields** and **methods** are defined using **#** prefix.
* Can't add properties directly inside the class body (outside constructor).
* Can use getters and setters (get / set keywords).
* Instance methods are stored on the prototype.
* Can't call class constructor **without new keyword**.
* Class expressions can be named or anonymous.
* **Supports method overriding** in child classes.
* Classes help organize code into **reusable blueprints**.
* Classes can be **exported/imported** in modules.
* Can’t access this before **super() in subclasses**.