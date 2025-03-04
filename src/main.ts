type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F";
type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6;
type Grades = AmericanGrades | GermanGrades | undefined;


type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grade: Grades[]
};

type Students = Student[];

const student1: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 22,
    grade: ["A", 2, undefined, 1, "B"]
};

const student2: Student = {
    firstName: "Erika",
    lastName: "Mustermann",
    age: 20,
    grade: ["A", 1, undefined, 1, undefined]
};

const myStudents: Students = [student1, student2];

function showStudent(student: Student) {
    // console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    // console.log("====================");
    // console.log("Grades: " + student.grade.map(grade  => grade === undefined ? "*" : grade).join(", "));

    console.log(`${student.firstName} ${student.lastName} (${student.age})\n====================\nGrades: ${student.grade.map(grade => grade === undefined ? "*" : grade).join(", ")}`);
}

myStudents.map(student => showStudent(student));
