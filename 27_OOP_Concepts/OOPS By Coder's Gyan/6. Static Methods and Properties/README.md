# Static in JavaScript

## 🔹 Static keyword:
1. Used inside classes.

2. Declares static methods or properties.

3. Static members belong to the class, not to the objects (instances) of the class.


## 🔹 Static Method:
1. Defined using the static keyword.

2. Called using the class name, not the object.

3. Cannot access instance properties directly (like **this.name**) unless passed an instance.

4. Commonly used for utility or helper functions.

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // ✅ 5
```


## 🔹 Static Property (Static Variable):
1. Declared with the static keyword.

2. Shared across all instances of the class.

3. Accessed using the class name, not the instance.

```js
class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }
}

new Counter();
new Counter();
console.log(Counter.count); // ✅ 2
```
