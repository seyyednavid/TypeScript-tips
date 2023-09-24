// Type Mapping --> we need the same properties in interface but with readonly properties

interface Product {
  name: string,
  price: number
}

type ReadOnlyProduct = {
  // index signature -- get all key and values from product
  readonly [k in keyof Product]: Product[k]
}

let product: ReadOnlyProduct = {
  name: 'a',
  price: 1
}

product.name = 'b'

// if we want to turn it to generic
type ReadOnly <T>= {
  // index signature -- get all key and values from product
  readonly [k in keyof T]: T[k] | null;
};

// Optional
type Optional<T> = {
  [k in keyof T]?: T[k] | null
}

// Nullable
type Nullable<T> = {
  [k in keyof T] ?: T[k] | null
}