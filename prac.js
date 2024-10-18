const fetchFunc = async () => {
  try {
    let postData = {
      title: "Post 1",
      body: "This is the first post",
      userId: 1,
    };

    //  const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const finalResp = await apiResp.json();
    console.log(finalResp);
  } catch (err) {
    console.log(err.message);
  }
};

// fetchFunc();

const arr = [{ name: "aj" }, { name: "dj" }, { name: "om" }];

// arr.map((elem)=>{
//    return console.log(elem.name);
// })

// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i].name);
// }

// arr.forEach((elem)=>{
//  for(key in elem){
//     return console.log(key+":"+elem[key]);
// }
// })

const func = async (err) => {
  let cPromise = new Promise((res, rej) => {
    setTimeout(() => {
      switch (err) {
        case 1: {
          res("promise Resolve");

          break;
        }
        case 0: {
          rej(new Error("promise Rejected"));
        }
        default:
          res("promise pending");
      }
    }, 1000);
  });

  try {
    const resp = await cPromise;

    console.log(resp);
  } catch (err) {
    console.error(err.message);
  }
};

func(0);

const pendingPromise = () => {
  return new Promise(() => {});
};

const resolvePromise = (name) => {
  return new Promise((resolve) => {
    resolve(name);
  });
};

const rejectedPromise = (reason) => {
  return new Promise((resolve, rejected) => {
    rejected(reason);
  });
};

const promiseCall = async () => {
  try {
    let promiseResp;
    // promiseResp = await rejectedPromise("Something Went Wrong");
    // promiseResp = await resolvePromise("Something Went Wrong");
    pendingPromise("Something Went Wrong");
    promiseResp = await pendingPromise("Something Went Wrong");
    console.log(promiseResp);
  } catch (err) {
    console.log(err);
  }
};

promiseCall();

class Person {
  constructor(name, lName) {
    this.name = name;
    this.lName = lName;
  }

  log() {
    return `${this.name} and ${this.lName}`;
  }
}

const personObj = new Person("ashu", "jha");

// console.log(personObj.log());

//reverse arr
function reverseArray(arr) {
  let revrsedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i);
    revrsedArr.push(arr[i]);
  }

  return revrsedArr;
}
// console.log(reverseArray([1, 2, 3, 4, 5]));

//concat two object and
function mergeObjects(obj1, obj2) {
  // Your code here
  return { ...obj2, ...obj1 };
}
// console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4})); // {a: 1, b: 3, c: 4}

//is palindrome
const isPalindrome = (str) => {
  // const arr1 = str.split("");
  // const reverseArr = [];
  // let isPalindromeVar = true;

  // for (let i = arr1.length - 1; i >= 0; i--) {
  //   reverseArr.push(arr1[i]);
  // }

  // for (let i = 0; i < reverseArr.length; i++) {
  //   if (arr1[i] !== reverseArr[i]) {
  //     isPalindromeVar = false;
  //     break;
  //   }
  // }

  // return isPalindromeVar;

  //short code
  let reversedArr = str.split("").reverse().join("");
  console.log(str === reversedArr);
};

console.log(isPalindrome("racecar"));


