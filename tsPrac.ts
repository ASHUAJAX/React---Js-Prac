function greet(name: string): string {
    return "hello " + name;
}

console.log(greet("Ashu"));

//data type
let isDone: boolean = false;
let age: number = 30;
let firstName: string = 'John';
let numbers: number[] = [1, 2, 3, 4, 5];
let array: any[] = [1, "2", 3, 4, 5];



console.log(isDone, age, firstName, numbers, array);

//interfaces
interface Person {
firstname : string,
lastname : string,
age : number
}

const person : Person = {
firstname:"ashu",
lastname:"jha",
age:24
}

console.log(person);

//classes
class Animal{
    name : string;

    constructor(name:string){
     this.name = name;
    }

    dogBarks(barking:boolean = false){
   console.log(`${this.name} is ${barking ? "barking" : "not barking"}!`)
    }
}

const animalObj = new Animal("dog");
console.log(animalObj.name);
animalObj.dogBarks(true);

