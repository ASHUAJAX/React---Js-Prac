//find uplicates
// const arr = [1, 2, 3, 4, 5, 6, 2, 3, 7, 8, 9, 9];
// console.log(findDuplicates(arr,"")); // Output: [2, 3, 9]

// function findDuplicates(arr,which) {
//   const duplicatesArr = [];
//   const filterArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!filterArr.includes(arr[i])) {
//       filterArr.push(arr[i]);
//     } else {
//       duplicatesArr.push(arr[i]);
//     }
//   }

//   if(which === "dupArr"){
//     return duplicatesArr;
//   }else{
//     return filterArr;
//   }

// }

//sum of the digits
// const number = 12345;
// console.log(sumOfDigits(number));

// function sumOfDigits(number) {
//   // let numbredString = number.toString();
//   let numbredArr = number.toString().split("");
//   let sum = 0;
//   numbredArr.map((elm) => {
//     sum += parseInt(elm);
//   });
//   return sum;
// }

// //fizzbuzz problem

// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }

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

function buildOutput(employees) {
  let result = {};

  const processEmployee = (employee) => {
    let { department, salary, subordinates } = employee;

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
}

// buildOutput(employees);

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

//calculate sallaries
// const employees = [
//   {
//     id: 1,
//     name: "John Doe",
//     department: "Engineering",
//     salary: 80000,
//     reports: [
//       {
//         id: 2,
//         name: "Jane Smith",
//         department: "Engineering",
//         salary: 60000,
//         reports: [
//           {
//             id: 6,
//             name: "Emma Williams",
//             department: "Engineering",
//             salary: 45000,
//           },
//         ],
//       },
//       {
//         id: 3,
//         name: "Sam Johnson",
//         department: "Engineering",
//         salary: 50000,
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Alice Brown",
//     department: "Sales",
//     salary: 75000,
//     reports: [
//       {
//         id: 5,
//         name: "Bob White",
//         department: "Sales",
//         salary: 55000,
//       },
//     ],
//   },
// ];
//  output : {
//   "Engineering": {
//     "totalSalary": 235000,
//     "averageSalary": 58750,
//     "numberOfEmployees": 4
//   },
//   "Sales": {
//     "totalSalary": 130000,
//     "averageSalary": 65000,
//     "numberOfEmployees": 2
//   }
// }

//long way
// function calculateSalaries(employees) {
//   let output = employees.reduce((acc, elm) => {
//     const { department, salary, reports } = elm;
//     if (!acc[department]) {
//       acc[department] = {
//         totalSalary: 0,
//         averageSalary: 0,
//         numberOfEmployees: 0,
//       };
//     }

//     acc[department].totalSalary += salary;
//     acc[department].numberOfEmployees++;

//     reports?.map((nestedElm) => {
//       const {
//         department: departmentLevelTwo,
//         salary: salaryLevelTwo,
//         reports: reportsLevelTwo,
//       } = nestedElm;

//       if (!acc[departmentLevelTwo]) {
//         acc[departmentLevelTwo] = {
//           totalSalary: 0,
//           averageSalary: 0,
//           numberOfEmployees: 0,
//         };
//       }

//       acc[departmentLevelTwo].totalSalary += salaryLevelTwo;
//       acc[departmentLevelTwo].numberOfEmployees++;

//       reportsLevelTwo?.map((nestedElmThree) => {
//         const {
//           department: departmentLevelThree,
//           salary: salaryLevelThree,
//         } = nestedElmThree;

//         if (!acc[departmentLevelThree]) {
//           acc[departmentLevelThree] = {
//             totalSalary: 0,
//             averageSalary: 0,
//             numberOfEmployees: 0,
//           };
//         }

//         acc[departmentLevelThree].totalSalary += salaryLevelThree;
//         acc[departmentLevelThree].numberOfEmployees++;
//       });
//     });

//     return acc;
//   }, {});

//   for(let key in output){
//     output[key].averageSalary =  output[key].totalSalary / output[key].numberOfEmployees
//   }

//   console.log(output);
// }

// calculateSalaries(employees);

//recursive method(short way)

// const calculateSalaries=(employees)=>{

// let output = {};

// function processEmployee(employee) {
//   const { department, salary, reports } = employee;

//   if (!output[department]) {
//     output[department] = {
//       totalSalary: 0,
//       averageSalary: 0,
//       numberOfEmployees: 0,
//     };
//   }

//   output[department].totalSalary += salary;
//   output[department].numberOfEmployees++;

//   if(reports){
//     reports.forEach(processEmployee);
//   }
// }

// employees.forEach(processEmployee);

// for(let key in output){
//   output[key].averageSalary = output[key].totalSalary / output[key].numberOfEmployees;
// }

// console.log(output);

// }

// calculateSalaries(employees);

// #3

// const transactions = [
//   { category: "Electronics", amount: 300 },
//   { category: "Electronics", amount: 450 },
//   { category: "Clothing", amount: 150 },
//   { category: "Clothing", amount: 250 },
//   { category: "Groceries", amount: 100 },
// ];

// function aggregateSales(transactions) {
//   let result = transactions.reduce((acc, elm) => {
//     const { category, amount } = elm;
//     if (!acc[category]) {
//       acc[category] = {
//         totalAmount: 0,
//         numberOfTransactions: 0,
//       };
//     }
//     acc[category].totalAmount += amount;
//     acc[category].numberOfTransactions++;
//     return acc;
//   }, {});

//   console.log(result);
// }

// aggregateSales(transactions);

// // output : {
// //   "Electronics": {
// //     "totalAmount": 750,
// //     "numberOfTransactions": 2
// //   },
// //   "Clothing": {
// //     "totalAmount": 400,
// //     "numberOfTransactions": 2
// //   },
// //   "Groceries": {
// //     "totalAmount": 100,
// //     "numberOfTransactions": 1
// //   }
// // }

// #4

const tasks = [
  { employee: "John Doe", project: "Project A", hours: 20 },
  { employee: "Jane Smith", project: "Project A", hours: 15 },
  { employee: "John Doe", project: "Project B", hours: 25 },
  { employee: "Jane Smith", project: "Project A", hours: 10 },
  { employee: "Sam Johnson", project: "Project A", hours: 30 },
];

function computeHours(tasks) {

  const result = tasks.reduce((acc, elm) => {
    
    const { employee, project, hours } = elm;
    if (!acc[employee]) {
      acc[employee] = { [project]: 0 };
    }
    if (!acc[employee][project]) {
      acc[employee][project] = hours;
    }else{
      acc[employee][project] += hours;
    }

    return acc;
  }, {});

  console.log(result);
}

computeHours(tasks);

// output
// {
//   'John Doe': { 'Project A': 20, 'Project B': 25 },
//   'Jane Smith': { 'Project A': 25 },
//   'Sam Johnson': { 'Project A': 30 }
// }

// #5
const students = [
  { name: "Alice", subjects: { Math: 90, English: 85, Science: 88 } },
  { name: "Bob", subjects: { Math: 75, English: 80, Science: 70 } },
  { name: "Charlie", subjects: { Math: 85, English: 90, Science: 92 } },
];

function aggregateGrades(students) {
  const result = {
    studentsAverage: {},
    highestGrade: {},
  };

  students.forEach((elm) => {
    let totalMarks = 0;
    let noOfSubject = 0;

    const { name, subjects } = elm;

    for (let key in subjects) {
      totalMarks += subjects[key];
      noOfSubject++;
      if (!result.highestGrade[key]) {
        result.highestGrade[key] = 0;
      }
      if (result.highestGrade[key] < subjects[key]) {
        result.highestGrade[key] = subjects[key];
      }
    }

    if (!result.studentsAverage[name]) {
      result.studentsAverage[name] = {
        [name]: parseFloat((totalMarks / noOfSubject).toFixed(2)),
      };
    }
  });

  console.log(result);
}

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
// }

// #6

const transactions = [
  { category: "Electronics", amount: 300 },
  { category: "Electronics", amount: 450 },
  { category: "Clothing", amount: 150 },
  { category: "Clothing", amount: 250 },
  { category: "Groceries", amount: 100 },
];

function aggregateSales(transactions) {
  let result = transactions.reduce((acc, elm) => {
    let { category, amount } = elm;

    if (!acc[category]) {
      acc[category] = { totalSales: 0, averageSales: 0, noOfSameCategory: 0 };
    }

    acc[category].totalSales += amount;
    acc[category].noOfSameCategory++;

    return acc;
  }, {});

  for (let key in result) {
    result[key].averageSales =
      result[key].totalSales / result[key].noOfSameCategory;
  }
  console.log(result);
}

// aggregateSales(transactions);

// output : {
//   "Electronics": {
//     "totalSales": 750,
//     "averageSales": 375
//   },
//   "Clothing": {
//     "totalSales": 400,
//     "averageSales": 200
//   },
//   "Groceries": {
//     "totalSales": 100,
//     "averageSales": 100
//   }
// }

const inventory = [
  { category: "Electronics", product: "Laptop", quantity: 10, price: 1000 },
  { category: "Electronics", product: "Smartphone", quantity: 20, price: 500 },
  { category: "Furniture", product: "Chair", quantity: 15, price: 150 },
  { category: "Furniture", product: "Table", quantity: 5, price: 300 },
];

function stockValuePerCategory(inventory) {
  let result = inventory.reduce((acc, elm) => {
    const { category, price, quantity } = elm;

    if (!acc[category]) {
      acc[category] = {
        totalStockValue: 0,
      };
    }

    acc[category].totalStockValue += quantity * price;

    return acc;
  }, {});

  console.log(result);
}

// stockValuePerCategory(inventory);

// ouput: {
//   "Electronics": {
//     "totalStockValue": 20000
//   },
//   "Furniture": {
//     "totalStockValue": 3750
//   }
// }
