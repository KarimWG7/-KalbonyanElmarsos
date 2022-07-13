// CHALLENGE#4
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCL("Rivian", 120, 23);

rivian.chargeBattery(85).accelerate();
console.log(rivian);
rivian.speedUS = 50;
console.log(rivian);
