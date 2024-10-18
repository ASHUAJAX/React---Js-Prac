// const apiFetch = async () => {
//   try {
//     const data = {
//       title: "Post 1",
//       body: "This is the first post",
//       userId: 1,
//     };
//     // const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const finalApiResp = await apiResp.json();
//     console.log(finalApiResp);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// apiFetch();

let arr = [
  {
    title: "Post 1",
    body: "This is the 1st post",
    userId: 1,
  },
  {
    title: "Post 2",
    body: "This is the 2nd post",
    userId: 2,
  },
];

const obj = {
  title: "Post 1",
  body: "This is the first post",
  userId: 1,
};

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].userId);
// }

// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i].userId);
// }

// let result = arr.forEach((elm) => {
//   // console.log(elm.userId);
//   return elm.userId;
// });

// console.log(result);

// result = [1, 2, 4, 5]
//   .map((elm) => {
//     return elm;
//   })
//   .reduce((acc, sum) => acc + sum, 0);

// console.log(result);

// for(let key of arr){
//     console.log(key);
// }

// for(let key in obj){
//     console.log(key+":"+obj[key]);
// }

// const promiseFunc = async (which) => {
//   const promiseResp = new Promise((resolve, reject) => {
//     switch (which) {
//       case 0: {
//         reject(new Error("Something went wrong!"));
//         break;
//       }

//       case 1: {
//         resolve("resolved");
//         break;
//       }

//       default: {
//         resolve("pending...");
//       }
//     }
//   });
//   try {
//     const finalPromiseResp = await promiseResp;

//     console.log(finalPromiseResp);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// promiseFunc(2);

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     dog(){
//         console.log(this.name);
//     }
// }

// const animalObj = new Animal("dogy");

// animalObj.dog();

// arr = [...arr.filter((elm)=> elm.userId === 2)]
// console.log(arr);
// Object.assign(obj,{objId:4});

// console.log(obj);

const missArr = [0,1,4,2];
console.log(missFunc(missArr));

function missFunc(missArr) {
  const foundMissNumbers = [];

//   const sortedArr = missArr.sort((a,b)=>a-b);
//   console.log(sortedArr);
  let maxNum = 0;
  missArr.map((elm) => {
    if (maxNum < elm) {
      maxNum = elm;
    }
  });

  for (let i = 0; i <= maxNum; i++) {
    if (!missArr.includes(i)) {
      foundMissNumbers.push(i);
    }
  }

  console.log(maxNum);

  return foundMissNumbers;
}

console.log('Start');

setTimeout(() => {
    console.log('Callback 1');
}, 1000);

setTimeout(() => {
    console.log('Callback 2');
}, 0);

console.log('End');
