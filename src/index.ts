// keyof
interface Product {
  name: string;
  price: number;
}

// class Store<T> {
//   protected _objects: T[] = [];
//   add(obj: T): void {
//     this._objects.push(obj);
//   }
//   find(property: string, value: unknown): T | undefined {
//     return this._objects.find(obj => obj[property] === value)
//   }
// }


// solve the problem
class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value)
  }
}



let store = new Store<Product>()
store.add({name: "a", price : 1})
store.find('name', "a");
store.find("price", 1);
// problem - we can give it anything as inputs - add (18 - 28)
store.find("anything", 1)