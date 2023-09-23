"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("walking");
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "principal " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, "Navid", "hejazi"),
    new Teacher("mohammad", "ali"),
    new Principal("maziar", "yousefi"),
]);
//# sourceMappingURL=index.js.map