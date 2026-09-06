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
const db = require("./server").db();

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
 
