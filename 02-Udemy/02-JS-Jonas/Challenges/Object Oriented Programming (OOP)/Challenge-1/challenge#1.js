// CHALLENGE#1
// #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// #2
Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
// #3
Car.prototype.brake = function () {
  console.log(this.speed - 5);
};
// #4
const BMW = new Car(2005, 120);
const Marcedes = new Car(2005, 95);
BMW.accelerate();
BMW.brake();
Marcedes.accelerate();
Marcedes.brake();

