//get method
const fetchApiFunc = async () => {
  try {
    const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!apiResp.ok) {
      throw new Error("Something went wrong in fetchi posts api!");
    }
    const finalData = await apiResp.json();
    if (finalData) {
      console.log(finalData);
    } else {
      throw new Error("Something went wrong in fetchi posts api!");
    }
  } catch (err) {
    console.log(err.message);
  }
};

// fetchApiFunc();

//post method
const fetchApiPostFunc = async () => {
  try {
    const sendData = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    };

    const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });
    if (!apiResp.ok) {
      throw new Error("Something went wrong in fetchi posts api!");
    }
    const finalData = await apiResp.json();
    console.log(finalData);
  } catch (err) {
    console.log(err.message);
  }
};

// fetchApiPostFunc();

//promise
const promiseFunc = async (data) => {
  const promise = new Promise((res, rej) => {
    switch (data) {
      case 1: {
        res("resolved!");
        break;
      }
      case 0: {
        rej("rejected");
        break;
      }
      default: {
        console.log("pending...");
        setTimeout(() => {
          res("resolved!");
        }, 2000);
      }
    }
  });

  try {
    const promiseResp = await promise;
    console.log(promiseResp);
  } catch (err) {
    console.log(err);
  }
};

// promiseFunc();

//generators
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunc();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//array operations
const array = [
  { name: "ashu", age: 25 },
  { name: "shubham", age: 21 },
  { name: "yash", age: 27 },
  { name: "shivam", age: 24 },
];

//map

// const newArray = array.map((elm) => {
//   console.log(elm.name);
//   return { ...elm, name: elm.name + 1 };
// });

// console.log("map returns new array",newArray);

//forEach

// const newArray = array.forEach((elm)=>{
//   console.log(elm.name);
//   return { ...elm, name: elm.name + 1 };
// })

// console.log("foreach not returns new array",newArray);

//reduce
const findMaxAgedPerson = () => {
  const maAgePerson = array.reduce((accObj, elm) => {
    if (!accObj.age) {
      accObj = { age: 0 };
    }
    if (elm.age > accObj.age) {
      accObj = { ...elm, age: elm.age };
    }
    return accObj;
  }, {});

  console.log(maAgePerson);
};

// findMaxAgedPerson();

//fileter
const fileteredArray = array.filter((elm) => elm.age > 24);
// console.log(fileteredArray);

//for loop

// for(let i=0;i<array.length;i++){
//   console.log(array[i].age);
// }

// reverse for loop
// for(let i=array.length-1;i>=0;i--){
//   console.log(array[i].age);
// }

//for of loop

// for(elm of array){
//   console.log("for of loop value : ",elm.name);
// }

//while
// let i=0;
// while(i<array.length){
//   console.log(array[i]);
//   i++;
// }

//do while
let i = 0;

// do{
//   console.log(array[i])
//   i++;
// }while(i<array.length);

const obj = {
  name: "ashu",
  age: 23,
  qualification: "diploma",
};

//for in loop
for (key in obj) {
  console.log(obj[key]);
}

//Object.entries
// const value = Object.entries(obj).map(([key,value])=>{return {key,value}});

// console.log(value);

// //object.value
// const value = Object.values(obj);
// console.log(value);

//object.keys
const value = Object.keys(obj);
console.log(value);

const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    salary: 80000,
    subordinates: [
      {
        id: 2,
        name: "Jane Smith",
        department: "Engineering",
        salary: 60000,
      },
      {
        id: 3,
        name: "Sam Johnson",
        department: "Engineering",
        salary: 50000,
      },
    ],
  },
  {
    id: 4,
    name: "Alice Brown",
    department: "Sales",
    salary: 75000,
    subordinates: [
      {
        id: 5,
        name: "Bob White",
        department: "Sales",
        salary: 55000,
      },
    ],
  },
];

const getOutput = () => {
  let result = {};
  const processEmployee = (elm) => {
    const { department, salary, subordinates } = elm;
    if (!result[department]) {
      result[department] = {
        totalSalary: 0,
        averageSalary: 0,
        numberOfEmployees: 0,
      };
    }
    result[department].totalSalary += salary;
    result[department].numberOfEmployees++;

    if (subordinates) {
      subordinates.forEach(processEmployee);
    }
  };
  employees.forEach(processEmployee);
  for (let key in result) {
    result[key].averageSalary =
      result[key].totalSalary / result[key].numberOfEmployees;
  }
  console.log(result);
};
// getOutput();
//output
// {
//   Engineering: {
//     totalSalary: 190000,
//     averageSalary: 63333.33,
//     numberOfEmployees: 3
//   },
//   Sales: {
//     totalSalary: 130000,
//     averageSalary: 65000,
//     numberOfEmployees: 2
//   }
// }

const tasks = [
  { employee: "John Doe", project: "Project A", hours: 20 },
  { employee: "Jane Smith", project: "Project A", hours: 15 },
  { employee: "John Doe", project: "Project B", hours: 25 },
  { employee: "Jane Smith", project: "Project A", hours: 10 },
  { employee: "Sam Johnson", project: "Project A", hours: 30 },
];

const computeHours = () => {
  const result = tasks.reduce((acc, elm) => {
    const { employee, project, hours } = elm;
    if (!acc[employee]) {
      acc[employee] = { [project]: 0 };
    }
    if (!acc[employee][project]) {
      acc[employee][project] = hours;
    } else {
      acc[employee][project] += hours;
    }
    return acc;
  }, {});

  console.log(result);
};
// computeHours();
// output
// {
//   'John Doe': { 'Project A': 20, 'Project B': 25 },
//   'Jane Smith': { 'Project A': 25 },
//   'Sam Johnson': { 'Project A': 30 }
// }

const students = [
  { name: "Alice", subjects: { English: 85, Math: 90, Science: 88 } },
  { name: "Bob", subjects: { Math: 75, English: 80, Science: 70 } },
  { name: "Charlie", subjects: { Math: 85, English: 90, Science: 92 } },
];
const aggregateGrades = () => {
  const result = students.reduce(
    (acc, elm) => {
      const { name, subjects } = elm;
      let totalMarks = 0;
      let noOfSubjects = 0;

      for (let key in subjects) {
        totalMarks += subjects[key];
        noOfSubjects++;
        if (!acc.highestGrade[key]) {
          acc.highestGrade[key] = 0;
        }
        if (acc.highestGrade[key] < subjects[key]) {
          acc.highestGrade[key] = subjects[key];
        }
      }

      if (!acc.studentsAverage[name]) {
        acc.studentsAverage[name] = totalMarks / noOfSubjects;
      }

      return acc;
    },
    {
      studentsAverage: {},
      highestGrade: {},
      toppers: { first: [0, ""], second: [0, ""], third: [0, ""] },
    }
  );
  // Calculate the toppers
  const sortedToppers = Object.entries(result.studentsAverage)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => {
      return { [entry[0]]: entry[1] };
    });

  console.log("as", sortedToppers);

  result.toppers.first = sortedToppers[0];
  result.toppers.second = sortedToppers[1];
  result.toppers.third = sortedToppers[2];
  console.log(result);
};

// aggregateGrades(students);

//output
// {
//   "studentsAverage": {
//     "Alice": 87.67,
//     "Bob": 75,
//     "Charlie": 89
//   },
//   "highestGrade": {
//     "Math": 90,
//     "English": 90,
//     "Science": 92
//   }
//   "toppers": {
//    first : "Charlie"
//    second : "Alice"
//     third : "Bob"

//   }
// }

// #6

const findMissingNumber = (arr) => {
  let max = Math.max(...arr);
  const missingArr = [];
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      missingArr.push(i);
    }
  }
  console.log(missingArr);
};

// findMissingNumber([1, 2, 3, 4, 8, 9]);


//class
class Animal{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  callAnimal(){
    console.log(this.name,this.age);
  }
}

const animalObj = new Animal("Dog","2");
animalObj.callAnimal()