// CHALLENGE#2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(this.speed + 10);
  }
  brake() {
    console.log(this.speed - 5);
  }
  get speedUS() {
    console.log(`Your speed in miles is: ${this.speed / 1.6} mph`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const bmw = new CarCl("BMW", 130);
const mercedes = new CarCl("Mercedes", 150);
mercedes.accelerate();
mercedes.brake();
bmw.accelerate();
bmw.brake();
mercedes.speedUS;
mercedes.speedUS = 50;
console.log(mercedes);