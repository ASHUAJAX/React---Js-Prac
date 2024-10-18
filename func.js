//for loop prac
// const forFunc = () => {
//   let arr = [{ name: "ashu" }, { name: "shubham" }, { name: "yash" }];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let obj = {};
//     obj = { [arr[i].name]: arr[i].name };
//     arr2 = [...arr2, obj];
//   }
//   console.log(arr2);
// };

// forFunc();

//api fethc

// const getFetchFunc = async () => {
//   try {
//     const fethcResp = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/" + `4`
//     );

//     let finalResp = await fethcResp.json();

//     console.log(finalResp);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getFetchFunc();

//post api call
// const postFetchFunc = async () => {
//   try {
//     let data = {
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     };
//     let apiResp = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       data: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json,charset=UTF-8",
//       },
//     });

//     let finalResp = await apiResp.json();

//     console.log(finalResp);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// postFetchFunc();

//promises

// const promiseFunc = async () => {
//   const promise = new Promise((resolve, reject) => {
//     const a = "0";
//     if (a === 0) {
//       resolve("yes it's numeric zero");
//     } else {
//       reject(new Error("it's not numeric zero"));
//     }
//   });

//   try {
//     const resp = await promise;
//     console.log(resp);
//   } catch (err) {
//     console.log("error", err.message);
//   }
// };

// promiseFunc();

//filter method

// const filterFunc = () => {
//   const arr = [{ age: 10 }, { age: 10 }, { age: 11 }, { age: 14 }, { age: 13 }];

//   const filteredArr = arr.filter((elm) => elm.age > 10);

//   console.log(filteredArr);
// };

// filterFunc();

//map func

// const mapFunc = () => {
//   const arr = [{ age: 10 }, { age: 10 }, { age: 11 }, { age: 14 }, { age: 13 }];

//   let filteredArr = [];
//    arr.map((elm, index) => {
//     elm.age > 10 && filteredArr.push({age:elm.age});
//   });

//   console.log(filteredArr);
// };

// mapFunc();

//forEach
// const forEach=()=>{
//   const arr = [{ age: 10 }, { age: 10 }, { age: 11 }, { age: 14 }, { age: 13 }];

//   arr.forEach((elm)=>{
//     console.log(elm);
//   })
// }

// forEach();

//call bind apply

const callBindApplyFunc = () => {
  function greet(name, standard) {
    console.log(`my name is ${name} and ${standard} and i am ${this.role}`);
  }

  let user = { role: "hero" };

  //call
  // greet.call(user,"Ashu",10);

  //apply
  // greet.apply(user,["Ashu",10]);

  //bind

  const bindFunc = greet.bind(user, "john");

  bindFunc(10);
};

callBindApplyFunc();

// argumnets : we can only use arguments with non arrow functions
function argumentsFunc(...args) {
  console.log(args, typeof args, arguments[0]);
}

argumentsFunc(1, 1, "2");

//hoisting prac
// 1. Variable Hoisting:
// console.log(a);
// var a = 10;
// console.log(a);

// 2.Function Hoisting:
// hoistFunc();
// function hoistFunc(){
//   console.log("hoistFunc called");
// }

// //use strict
// function myStrictFunction() {
//   // "use strict";
//   y = 20; // This will cause an error because y is not declared
//   console.log(y);
// }
// myStrictFunction();

// while loop
// let i=0;
// while(i<5){
//   console.log(i);
//   i++;
// }

//do while

// let i=0;
// do{
// console.log(i);
// i++;
// }while(i<5){
// console.log("here",i);
// }

const arr = ["a", "b", "c"];
const arrOfObj = [{ name: "ashy" }, { name: "alok" }];
const obj = { name: "ashy", age: 23 };
// for loop
// for(let i=0;i<arr.length;i++){

//   if(arr[i]==="c"){
//     arr.length = 0;
//   }
//   console.log(i,arr[i]);
// }

// console.log(arr);

// // for of loop(it works with array);
// for(let elem of arrOfObj){
//   console.log(elem);
// }

// // for in loop(it works with obj to iterate the keys of object);
// for(let key in obj){
//   console.log(`${key} : ${obj[key]}`);
// }

//iife
// (function(){
//   let x=10;
// console.log(x);
// })();

//currying example

function sum(a) {
  return function sumTwo(b) {
    return a + b;
  };
}

// let sumFunc = sum(5);
// console.log(sumFunc(3));

//shalow copy and deep copy
//shalow copy example
// const originalBookshelf = [['book1'], ['book2']];
// const shallowCopy = [...originalBookshelf];

// shallowCopy[0].push('additional page'); // Modifying one copy
// console.log(shallowCopy); // Output: [['book1', 'additional page'], ['book2']]
// console.log(originalBookshelf); // Output: [['book1', 'additional page'], ['book2']]

// //deep copy example
// const originalBookshelf = [['book1'], ['book2']];
// const deepCopy = JSON.parse(JSON.stringify(originalBookshelf));

// deepCopy[0].push('additional page'); // Modifying one copy
// console.log(deepCopy); // Output: [['book1', 'additional page'], ['book2']]
// console.log(originalBookshelf); // Output: [['book1'], ['book2']]

//parseInt Example
let numberedStr = "1";

// console.log(isNaN(numberedStr));
console.log(numberedStr, parseInt(1, 2));

var message = "Hello\nWorld!";
console.log(message);
// Output:
// Hello
// World!

var filePath = "C:\\Users\\John\\Documents\\file.txt";
console.log(filePath);
// Output: C:\Users\John\Documents\file.txt

var stringWithQuotes = 'He said, "Hello!"';
console.log(stringWithQuotes);
// Output: He said, "Hello!"

//is array or not

const IsArray = (thing) => {
  return Array.isArray(thing);
  // if(thing.length >= 0){
  //   console.log("it's an array");
  // }else{
  //   console.log("it's not an array");
  // }
};

console.log(IsArray([]));

//is integer

const isinteger = (val) => {
  let valStr = val.toString().split("");

  if (valStr.includes(".")) {
    console.log("it's not an integer");
  } else {
    console.log("it's an integer");
  }
};

isinteger(1);
