const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback("this is my error!", null);
  }, 2000);
};

doWorkCallback((err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
});
