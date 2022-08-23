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

    // db.collection("users").findOne(
    //   { name: "Karim", age: 12 },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch user");
    //     }
    //     if (!user) {
    //       return console.log("there is no user with these specifications");
    //     }
    //     console.log(user);
    //   }
    // );
    db.collection('users').
    db.collection("users")
      .find({ age: 22 })
      .toArray((error, users) => {
        console.log(users);
      });
    db.collection("users")
      .find({ age: 22 })
      .count((error, count) => {
        console.log(count);
      });
  }
);
