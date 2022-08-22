console.log("Client side javascript file is loaded");

const input = document.querySelector("input");
const form = document.querySelector("form");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = input.value.trim().toLowerCase();
  p1.textContent = "Loading...";
  p2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${address}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        p1.textContent = res.error;
      } else {
        p1.textContent = res.location;
        p2.textContent = res.forecast;
      }
    });
  input.value = "";
  input.blur();
});
