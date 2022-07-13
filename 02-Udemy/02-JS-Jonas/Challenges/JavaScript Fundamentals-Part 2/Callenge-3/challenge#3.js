////////////////////////
// CHALLENGE#3
////////////////////////



const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
mark.calcBMI()
console.log(mark.bmi);

const jhon = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
jhon.calcBMI()
console.log(jhon.bmi);

console.log(mark.bmi > jhon.bmi)


mark.bmi > jhon.bmi ? console.log(``) : console.log(``)

