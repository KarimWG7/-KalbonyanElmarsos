// challenge#1


const checkDog = function (dogsJulia, dogskate) {
  const dogsJuliaCopy = dogsJulia.slice(1, 3);
  const allDogs = [...dogsJuliaCopy, ...dogskate]
  allDogs.forEach(function (dogAge, i) {
    const age =
      dogAge > 3 ? `an adult, and is ${dogAge} years old` : 'still a puppy🐶';
    console.log(`Dog number ${i + 1} is ${age}`);
  });
};
checkDog( [3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDog( [9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
