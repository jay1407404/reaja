const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://jasurbek4787_db_user:pmsCou4Sn1lWFm6x@reja.vhoebbc.mongodb.net/?retryWrites=true&w=majority";

mongodb.MongoClient.connect(connectionString)
  .then((client) => {
    console.log("MongoDB connected successfully!");

    db = client.db();

    const app = require("./app");
    const server = http.createServer(app);

    const PORT = 3000;

    server.listen(PORT, function () {
      console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("ERROR connecting to MongoDB:");
    console.log(err);
  });




