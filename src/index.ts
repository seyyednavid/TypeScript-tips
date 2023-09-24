// Generic in inheritance
interface Product {
  name: string,
  price: number
}

class Store<T>{
  protected _objects: T[]= []
  add(obj: T): void{
    this._objects.push(obj)
  }
}
let store1 = new Store<Product>();


// first solution
// class CompressibleStore<T> extends Store<T> {
//   compress(){}
// }
// let store2 = new CompressibleStore<Product>()
// store2.

// second solution
// class SearchableStore<T extends {name: "string"}> extends Store<T>{
//   find(name: string): T | undefined {
//     return this._objects.find(obj => obj.name === name)
//   }
// }


// Third solution 
class ProductStore extends Store<Product>{
  filterByCategory(category: string): Product[]{
    return []
  }
}
