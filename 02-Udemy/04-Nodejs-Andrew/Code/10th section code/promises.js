const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3]);
    reject("Things went wrong");
  }, 2000);
});

doWorkPromise
  .then((res) => {
    console.log("Success", res);
  })
  .catch((err) => console.error("Error" + err));
