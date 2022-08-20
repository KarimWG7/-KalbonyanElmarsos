const names = ["karim", "amr", "waheed"];
const shrotNames = names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      long: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Egypt", (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
