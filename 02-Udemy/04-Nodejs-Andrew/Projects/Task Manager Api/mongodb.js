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

    // const updatePromise = db.collection("users").updateOne(
    //   { name: "karim" },
    //   {
    //     $inc: {
    //       age: 2,
    //     },
    //   }
    // );
    // updatePromise
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("Error: " + err);
    //   });

    db.collection("tasks")
      .updateMany(
        { completed: false },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
);
