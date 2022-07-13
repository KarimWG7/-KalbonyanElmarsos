// CHALLENGE#3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
/////
EV.prototype = Object.create(Car.prototype);
///
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
////
const tesla = new EV("Tesla", 120, 25);
console.log(tesla);
tesla.chargeBattery(22);
console.log(tesla);
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
tesla.accelerate();