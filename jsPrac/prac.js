import { json } from "stream/consumers";

const arr = [
    {
        name: "Ashu",
        age: 21,
    },
    {
        name: "Shubham",
        age: 24,
    },
    {
        name: "Shivam",
        age: 22,
    },
    {
        name: "Yash",
        age: 25,
    },
];

// arr.map((elm,i)=>{
//     console.log(elm.name);
// })

// const filteredArr = arr.filter((elm)=> elm.age > 24 );
// console.log(filteredArr);

// const arrReducedValue = arr.reduce((acc, elm) => {
//     let { name, age } = elm;
//     if (!acc[name]) {
//         acc[name] = age
//     }
//     return acc;
// }, {});
// console.log(arrReducedValue);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name,arr[i].age);
// }

// for(let i = arr.length-1;i >= 0;i--){
//     console.log(arr[i]);
// }

// const promiseFunc = async (val) => {

//     const promise = new Promise((res, rej) => {
//         switch (val) {
//             case 1: res("resolved"); break;
//             case 0: res("pending"); break;
//             case 2: rej("rejected"); break;
//             default: rej("defaulted");
//         }
//     })

//     try {
//         const data = await promise;
//         console.info(data);
//     } catch (err) {
//         console.error("err",err);
//     }
// }

// promiseFunc(1);

const fetcherFunc = async (method) => {
    try {
        let resp = null;
        let sendObj = {
            userId: 10,
            id: 100,
            title: "at nam consequatur ea labore ea harum",
            body:
                "cupiditate quo est a modi nesciunt soluta\n" +
                "ipsa voluptas error itaque dicta in\n" +
                "autem qui minus magnam et distinctio eum\n" +
                "accusamus ratione error aut",
        };
        if (method === "get") {
            resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        } else {
            resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendObj),
            });
        }

        const finalResp = await resp.json();

        console.log(finalResp);
    } catch (err) {
        console.error(err.message);
    }
};
// fetcherFunc("");

//obj =
const obj = {
    name: "Ashu",
    age: 21,
};

// Object.entries(obj).map(([key,value])=>{
//     console.log(key , value);
// })

// for(let key in obj){
//     console.log(obj[key]);
// }

let array = [2, 2, 3, 5, 5, 7]; // Find out the missing and duplicate number.

const missingNumFunc = () => {
    let missingNumArr = [];
    let pushedArr = [];
    let dupliacteNUmArr = [];

    for (let i = 0; i < array.length; i++) {
        let finalNum = i + 1;
        console.log("val", array[i], finalNum);

        if (!pushedArr.includes(array[i])) {
            pushedArr.push(array[i]);
            if (array[i] !== finalNum) {
                missingNumArr.push(finalNum);
            }
        } else {
            dupliacteNUmArr.push(array[i]);
        }
    }
    console.log('missing numbers', missingNumArr); // missing number is 4
    console.log('duplicate numbers', dupliacteNUmArr); // dupliacte number is 5
};

// missingNumFunc();

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 },
    { name: 'Alice', age: 30 }
];

// Expected Output:
// {
//   'Alice': 3,
//   'Bob': 1,
//   'Charlie': 1
// }

const desiredOutput = data.reduce((acc, elm) => {
    let { name } = elm;
    if (!acc[name]) {
        acc[name] = 1
    } else {
        acc[name]++
    }
    return acc;
}, {});

// console.log(desiredOutput);

const nestedObj = {
    user: {
        name: 'Alice',
        address: {
            city: 'Wonderland',
            zip: 12345
        }
    },
    age: 25
};

// Expected Output:
// {
//   'user.name': 'Alice',
//   'user.address.city': 'Wonderland',
//   'user.address.zip': 12345,
//   'age': 25
// }
let flatObj = {};

const flatObjFunc = (obj, sentkey = null) => {
    for (let key in obj) {

        let newKey = sentkey ? `${sentkey}.${key}` : key

        if (typeof (obj[key]) === 'object') {
            flatObjFunc(obj[key], key)
        } else {
            flatObj[newKey] = obj[key]
        }

    }
}
flatObjFunc(nestedObj);
console.log(flatObj);
