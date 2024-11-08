const students = [
    { name: "Alice", subjects: { English: 85, Math: 90, Science: 88 } },
    { name: "Bob", subjects: { Math: 75, English: 80, Science: 70 } },
    { name: "Charlie", subjects: { Math: 85, English: 90, Science: 92 } },
];

const proceesStudentsMark = () => {
    let obj = {
        studentsAverage: {},
        highestGrade: {},
        toppers: { first: "", second: "", third: "" },
    };

    let totalMarksAllStudentsObj = [];
    students.forEach((elm) => {
        let { name, subjects } = elm;
        let avg;
        let totalMarks = 0;
        let noOfSubject = 0;
        if (!obj.studentsAverage[name]) {
            obj.studentsAverage[name] = 0;
        }

        for (let key in subjects) {
            totalMarks += subjects[key];
            noOfSubject++;
            if (!obj.highestGrade[key]) {
                obj.highestGrade[key] = 0
            }
            if (obj.highestGrade[key] < subjects[key]) {
                obj.highestGrade[key] = subjects[key]
            }



        }


        totalMarksAllStudentsObj.push({ marks: totalMarks, name })

        obj.studentsAverage[name] = (totalMarks / noOfSubject).toFixed(2);
    });

    let sortedMarks = totalMarksAllStudentsObj.sort((a, b) => b.marks - a.marks);

    obj.toppers.first = sortedMarks[0].name;
    obj.toppers.second = sortedMarks[1].name;
    obj.toppers.third = sortedMarks[2].name;

    console.log(obj);
};
proceesStudentsMark();
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
