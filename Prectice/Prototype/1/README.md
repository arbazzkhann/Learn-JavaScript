# Prototype

## Definition:
In JavaScript, every function has a property called .prototype which is used to attach properties and methods that should be shared across all instances created using that function as a constructor.

## Why Use Prototype?
To save memory and make methods shareable across all object instances, instead of creating the method again and again for each object.

## Keypoints:
* Every object in JavaScript has a hidden property [[Prototype]].
* You can access it using Object.getPrototypeOf(obj) or __proto__.
* Prototypes enable inheritance in JavaScript (called prototypal inheritance).
* It is not the same as a class, but helps to build OOP-like structure in JS.