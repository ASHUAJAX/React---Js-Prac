"use strict";
function greet(name) {
    return "hello " + name;
}
console.log(greet("Ashu"));
//data type
let isDone = false;
let age = 30;
let firstName = 'John';
let numbers = [1, 2, 3, 4, 5];
let array = [1, "2", 3, 4, 5];
console.log(isDone, age, firstName, numbers, array);
const person = {
    firstname: "ashu",
    lastname: "jha",
    age: 24
};
console.log(person);
//classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    dogBarks(barking = false) {
        console.log(`${this.name} is ${barking ? "barking" : "not barking"}!`);
    }
}
const animalObj = new Animal("dog");
console.log(animalObj.name);
animalObj.dogBarks(true);
