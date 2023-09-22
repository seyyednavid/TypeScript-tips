// static members
// class Ride{
//   //passenger
//   //pickupLocation
//   //DropOffLocation
//    activeRides: number = 0;

//   start(){
//     this.activeRides++;
//   }

//   stop(){
//     this.activeRides--;
//   }

// }

// let ride1= new Ride();
// ride1.start()

// let ride2= new Ride();
// ride2.start()

// console.log(ride1.activeRides); // 1
// console.log(ride2.activeRides);  // 1
// we need activeRides consider public (belong to class) not for each object separately


// static members
class Ride {
  //passenger
  //pickupLocation
  //DropOffLocation
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }
// for static type before get we should add static
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1= new Ride();
ride1.start()

let ride2= new Ride();
ride2.start()

console.log(Ride.activeRides);