# Strings

* Strings behave like **array of charactors** but it is **not array of charactors**.


* String are **Group of Charactors** / **Combination of Charactors** / **Collection of Charactors** / **Squence of Charactos**.


* Written in the **double quotes**:
```js
const hello = "Hello";
```


* Can be access using **index number**:
```js
const myName = "Arbaz";

console.log(myName[3]); //Output: a
```


* Strings are **immutable**:
```js
const myName = "Arbaz Khan";

myName[5] = "-";  //❌ Cannot mutate
```


## Methods of String

### length (it is a Property of String):
Returns the length.

```js
const myString = "Hello i am String";
console.log(myString.length);  //Output: 17
```

### slice():
Extracts substring.

```js
let myName = "Arbaz-Khan";
console.log(myName.slice(0, 6));

console.log(myName.slice(-5, -1));  //Output: -Kha
```

### substring()
Similar like splice but **doesn't support negative indexing**.



