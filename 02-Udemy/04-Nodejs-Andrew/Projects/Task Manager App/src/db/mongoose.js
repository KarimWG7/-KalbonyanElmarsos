const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/task-manager";
mongoose.connect(connectionURL);

module.exports;
