type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F";
type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6;
type Grades = AmericanGrades | GermanGrades | undefined;


type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grade: Grades[]
};

const myStudent: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 22,
    grade: ["A", 2, undefined, 1, "B"]
};

function showStudent(student: Student) {
    console.log("Vorname: " + student.firstName);
    console.log("Nachname: " + student.lastName);
    console.log("Alter: " + student.age);
    console.log("Note: " + student.grade.map(grade  => grade === undefined ? "*" : grade).join(", "));
}

showStudent(myStudent);