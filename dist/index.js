"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radious, color) {
        super(color);
        this.radious = radious;
    }
    render() {
        console.log("rendering a circle");
    }
}
let shape = new Circle(1, "red");
console.log(shape.render());
//# sourceMappingURL=index.js.map