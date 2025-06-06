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

### substring():
Similar like splice but **doesn't support negative indexing**.

```js
let myName = "Arbaz-Khan";
console.log(myName.substring(3))  //Output: az-Khan
```

### toUpperCase():
Capitalize word.

```js
let myName = "Arbaz-Khan";
console.log(myName.toUpperCase());  //Output: ARBAZ-KHAN
```

### toLowerCase():
Converts to Lowercase.

```js
let myName = "arbaz-khan";
console.log(myName.toLowerCase())  //Output: arbaz-khan
```

### concat():
Contactinate string.

```js
let myName = "Arbaz";
console.log(myName.concat("-Khan"));  //Output: Arbaz-Khan
```

### trim():
Trim extra spaces.

```js
let myDesc = "      Hello World     ";
console.log(myDesc.trim());  //Output: Hello World
```

### charAt():
Returns charactor of given Index.

```js
let myName = "Arbaz Khan";
console.log(myName.charAt(3));  //Output: a
```

### charCodeAt():
Returns ASCII Value of charactor.

```js
let myName = "Arbaz Khan";
console.log(myName.charCodeAt(2));  //Output: 98 (because b is at 98 in ASCII)
```

### indexOf():
Return index of sub-string.

```js
let myName = "Arbaz Khan";
console.log(myName.indexOf("b"));  //Output: 2
console.log(myName.indexOf("Khan"));  //Output: 6
```

### lastIndexOf():
Return index from last.
Searches right-to-left.

```js
let myName = "Arbaz Khan";
console.log(myName.lastIndexOf("a"));  //Output: 8
```

### includes(substring):
Checks if string exists.
return **true** or **false**.

```js
let myName = "Arbaz Khan";
console.log(myName.includes("Khan"));  //Output: true
console.log(myName.includes("Sharma"));  //Output: false
```

### startsWith(substring):
Checks if starts with sub-string.

```js
const name = "Arbaz Khan";
console.log(name.startsWith("A"));  //Output: true
console.log(name.startsWith("a"));  //Output: false
```

### endsWith(substring):
Checks if string ends with sub-string.

```js
const myName = "Arbaz Khan";
console.log(myName.endsWith("Khan"));  //Output: true
console.log(myName.endsWith("n"));  //Output: true
console.log(myName.endsWith("a"));  //Output: false
```

### replace(old, new):
Replace old sub-string to new sub-string.
Replace first occurrance of sub-string.

```js
const myName = "Arbaz Khan";
console.log(myName.replace("Khan", "Saifi"));  //Output: Arbaz Saifi
```

### replaceAll(old, new):
Replace all occurrance of sub-string.

```js
const myDesc = "Hello world, I am a Web Developer and Currently lerning JavaScript. JavaScript is very good language.";
console.log(myDesc.replaceAll("JavaScript", "Python"));  //Replaces all JavaScript to Python
```

### split(separator):
Splits string into array.

```js
let myTitle = "Hello, I am arbaz Khan a web-developer";
console.log(myTitle.split(" "));  //Separate string when " " comes.
```


## Questions of String
Q1. Print each charactor
Q2. Print in reverse order
Q3. Check if string is Pallindrome or not
Q4. Toggle each charater
Q5. Frequency of each character
