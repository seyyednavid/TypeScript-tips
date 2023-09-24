// Generic class

//what if  when we need key get 2 values(number and string)
class KeyValuePair1<T> {
  //template
  constructor(public key: T, public value: string) {}
}

let pair1 = new KeyValuePair1<number>(1, "Apple");
let pair2 = new KeyValuePair1<string>("1", "Apple");

class KeyValuePair2<K, V> {
  //template
  constructor(public key: K, public value: V) {}
}
//Both are correct
let pair3 = new KeyValuePair2<string, string>("1", "Apple");
let pair4 = new KeyValuePair2("1", "Apple");
