// access modifier protected
// protected members can be inherited but private members can not be protected
class Person {
  constructor(
    public firstName: string, 
    public lastName: string
    ) {}

  protected walk() {
    console.log("walking");
  }
  get fullName(): String {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName(): string {
    // return 'professor' + this.firstName + " " + this.lastName
    return "professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName(): string {
    return "principal " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "Navid", "hejazi"),
  new Teacher("mohammad", "ali"),
  new Principal("maziar", "yousefi"),
]);
