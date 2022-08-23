// CRUD create read update delete
const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("users")
      .deleteMany({ age: 22 })
      .then((res) => console.log("Items deleted successfuly", res))
      .catch((err) => console.log(err));
      
    db.collection("tasks")
      .deleteMany({ completed: true })
      .then((res) => console.log("Deleting all comleted tasks", res))
      .catch((err) => console.log(err));
  }
);
