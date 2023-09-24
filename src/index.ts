// Generic class
function wrapInArray1<T>(value: T) {
   return [value]
}
let numbers = wrapInArray1<number>(1)



//Generic method
class ArrayUtils {
   wrapInArray2<T>(value: T) {
   return [value]
}
}
let utils = new ArrayUtils()
utils.wrapInArray2<number>(5)


//Generic static method
class ArrayUtils2 {
  static wrapInArray3<T>(value: T) {
    return [value];
  }
}
ArrayUtils2.wrapInArray3<number>(1)