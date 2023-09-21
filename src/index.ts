// let prices: number = 1;
// let names: string = "David";

// function test(input : number){
//   console.log(input);
// }


// let numbers: number[] = [1, 2, 3]
// let letters: string[] = ['a', 'b', 'c']
// let games = []



// let topUser: [number, string] = [1, "DAvid"]
// console.log(topUser[0]);
// console.log(topUser[1]);

// const enum Size{small = 's', medium = 'm', Large = 'l' };
// let mySize: Size = Size.Large;


// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 50_000) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// function calculateTax2(income: number, taxYear = 20): number {
//   if (taxYear < 50_000) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax2(2)

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "dabi",
//   retire: (date: Date) => {}
// }


// Union types
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") 
//    return weight * 2.2;
//   else
//    return parseInt(weight) * 2.2;
// }


// Intersection types
// let weight: number & string;

// type Dragable = {
//   drag: () => void
// }
// type resizeable = {
//   resize: () => void;
// }
// type UIWidget = Dragable & resizeable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }


// literal type
// type Quantity = 50 | 100
// let quantity: Quantity = 50;

// type Metric = "cm" | "mm"
// let metric: Metric = "cm"


// Nullable types
// function greet(name: string | null | undefined) {
//   if(name)
//     console.log(name)
//   else 
//     console.log('invalid argument')
// }
// greet(undefined)




// // Optional chain
// type Customer = {
//   birthDate?: Date; // optional property
// };
// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthDate: new Date() };
// }
// let customerOne = getCustomer(0);
// // if (customerOne !== null && customerOne !== undefined)
// //   console.log(customerOne.birthDate);

// // console.log(customerOne?.birthDate);
// // Easy solution - chaining operator
// // let customerOne = getCustomer(0);
// console.log(customerOne?.birthDate?.getFullYear);
// //example ==> customer?.[0]


// Example
// // let log: any = (message: string) => console.log(message);
// let log: any = null
// log?.('a'); //when will be executed that log is a function

// nullish operator
// let speed: number | null = 0
// let ride = {
//   speed: speed !== null ? speed : 30
// }
//means if the value is null and undefined equal 30
// let ride = {
//   speed: speed ?? 30
// }
// console.log(ride.speed);


// type assertion
// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById("phone") as HTMLInputElement;
// phone.value 


// unknown
// function render (document : unknown) {
//   // typeof for primitive
//   if (typeof document === "string") {
//   } // instanceof for reference
//   else if (document instanceof Object) {
//   }
  
// }


// never 
function processEvent(): never{
  while(true){
    console.log("hi");
  }
}
processEvent();
// below cod won't be executed because all the time are working
console.log("hey");