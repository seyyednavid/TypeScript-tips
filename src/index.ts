// apply constructions

function echo<T extends number | string>(value: T): T {
  return value;
}
function echo1<T extends { name: string }>(value: T): T {
  return value;
}

echo1({ name: "David" });
//---------------------------------
interface Person {
  name: string;
}

function echo3<T extends Person>(value: T): T {
  return value;
}

echo3({ name: "Lida" });
//--------------------------------

class Person1 {
  constructor(public name : string){}
}

class Customer extends Person1{}

function echo4<T extends Person1>(value: T): T {
  return value;
}

echo4(new Customer("asad"))