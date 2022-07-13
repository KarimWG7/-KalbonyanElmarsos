// challenge#!
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Something went wroong ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      console.log(`You are in ${response.city}, ${response.country}`);
      console.log(response);

      return fetch(`https://restcountries.com/v3.1/name/${response.country}`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Something went wroong ${response.status}`);
      }
      return res.json();
    })
    .then((res) => renderCountry(res[0]))

    .catch((err) => console.error(`${err.message}☠`));
};
lati = 52.508;
lngi = 13.381;
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);
whereAmI(lati, lngi);