console.log("Web Serverni boshlash");

const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB connect
const client = require("./server");
const db = client.db("REJA");

const mongodb = require("mongodb");

// 3 Views code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code 
app.post("/create-item", (req, res) => {
    console.log("User entered /create-item");
    console.log(req.body);

    const new_reja = req.body.reja;

    db.collection("plans").insertOne(
    { reja: new_reja },
    (err, data) => {
        if (err) {
            console.log(err);
            return res.end("Something went wrong");
        }

        console.log(data);

        res.json({
            _id: data.insertedId,
            reja: new_reja
        });
    }
);
});


// Delete item

app.post("/delete-item", (req, res) => {
    const data = req.body;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(data.id) },
        function(err,data) {
            res.json({state: "success"});
        }
    )
});


// Edit item

app.post("/edit-item", (req, res) => {
    const data = req.body;

    console.log(data);

    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    state: "error"
                });
            }

            res.json({
                state: "success"
            });
        }
    );
});

app.post("/delete-item", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany({}, function (err, data) {
            res.json({ state: "Hamma reja o'chirildi" });
        });
    }
})

// GET ITEMS
app.get("/", (req, res) => {
    console.log("User entered /");

    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong");
            } else {
                console.log(data);
                res.render("reja", { items: data });
            }
        });
});



module.exports = app;
 
