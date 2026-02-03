# Bind() Method

* The **bind()** method **returns a new function** with a **permanently set *"this"* value**.
* The **first argument** defines the ***"this"*** context.
* **Additional arguments** are stored and **used when the new function runs**.
* The **original function** is **not modified**.

## Example:

```js
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {

        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();
```


# Call() Method

* The **call()** method **invokes the function immediately** and 
* sets ***"this"*** to the **first argument**. 
* Any **additional arguments** are passed **directly to the function**. 

## Example 1:

```js
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

PrintName.sayHi.call(nameObj, 42);
```

## Example 2:

```js
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyCall(nameObj, 42);
```


# Apply() Method

* The **apply()** method **calls a function immediately** and 
* sets ***"this"*** to the **first argument** passed. 
* Unlike call(), the **additional arguments** must be **provided as an array**, which are then **passed to the function**.

## Example 1:

```js
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
PrintName.sayHi.apply(nameObj, [42]);
```


## Example 2:

```js
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyApply(nameObj, [42]);
```