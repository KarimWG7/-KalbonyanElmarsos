const fs = require("fs");

const book = {
  title: "Atomic Habits",
  author: "james clare",
};
const bookJson = JSON.stringify(book);
console.log(bookJson);
const book2 = JSON.parse(bookJson);
console.log(book2);

fs.writeFileSync('1-json.json', bookJson)
const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataJson = dataBuffer.toString();
console.log(dataJson);
const data = JSON.parse(dataJson);
console.log(data);

const dataJson = fs.readFileSync("1-json.json").toString();
const user = JSON.parse(dataJson)

user.name = "Amr"
user.age = 22
const userJson = JSON.stringify(user)
fs.writeFileSync("1-json.json", userJson);

console.log('Success!');