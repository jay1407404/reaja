const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://jasurbek4787_db_user:pmsCou4Sn1lWFm6x@reja.vhoebbc.mongodb.net/?retryWrites=true&w=majority";

mongodb.MongoClient.connect(connectionString)
  connectionString,
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
},
(err, client) => {
    if(err) console.log("ERROR connecting to MongoDB:",);
    else {
        console.log("Successfully connected to MongoDB");
        console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(
              `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
}




