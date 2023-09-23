// Method overriding
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

class Teacher extends Person {
   override get fullName(): string {
    // return 'professor' + this.firstName + " " + this.lastName
     return 'professor ' + super.fullName;
   }
}

const teacher = new Teacher('Ali', "ostad")
console.log(teacher.fullName);
