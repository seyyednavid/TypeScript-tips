// Dynamic property

//Sometimes we need to have dynamic objects, in default
//typescript do not allow to create dynamic objects
// we should use index signature property
class SeatAssignment {
  [seatNumber: string]: string;
}


let seats = new SeatAssignment()
seats.A1 = 'mohammad';
// seat['A1'] = "mohammad"
seats.A2 = "Amir";
