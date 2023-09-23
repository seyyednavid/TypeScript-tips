// Interface ==> determine the shape of object

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
interface Calender {
 name: string;
 addEvent(): void;
 removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}
// when we use tsc we can not anything in index.js
// because js does not have interface concept

// if we have specific logic in parent and we wanna use them in children
// it is better to use the first method.
// Otherwise the second method because code be less and more tidy


// with implements we can use interfaces
class GoogleCalender implements Calender {
  constructor(public name:string){}
  addEvent(): void {}
  removeEvent(): void {}
}