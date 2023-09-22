class Person {
  constructor(
    public firstName: string, 
    public lastName: string
    ) {}
  walk() {
    console.log("walking");
  }
  get fullName(): String {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(
    public studentId: number, 
    firstName: string, 
    lastName: string) {
    super(firstName, lastName);
  }

  takeTest(){
    console.log("Taking a test");
  }
}

let student = new Student(1,"David", "Hejazi")
