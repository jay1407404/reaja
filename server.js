const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://jasurbek4787_db_user:pmsCou4Sn1lWFm6x@reja.vhoebbc.mongodb.net/?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR connecting to MongoDB:", err);
     else {
        console.log(client);
      console.log("Successfully connected to MongoDB");
     module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      const PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);




