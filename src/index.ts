// abstract class - for we are not allowed to create object from a class
// we can have method abstract(there is no code in method body) only in class abstract
abstract class Shape {
  constructor(public color: string) {}

  // render() {}
  abstract render(): void
}

class Circle extends Shape{
  constructor(
    public radious: number,
    color: string
  ){
    super(color)
  }

  override render(): void{
    console.log("rendering a circle");
  }
}


let shape = new Shape("red")
shape.render()
