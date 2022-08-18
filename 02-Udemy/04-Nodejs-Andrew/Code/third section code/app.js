const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is karim ghanem");
fs.appendFileSync("notes.txt", " and iam a full stack web developer");
