const express = require("express");
const { Router } = require("express");
const Person = require("../models/person");
const router = express.Router();

// get a list of data from the database.
router.get("/data", (req, res) => {
    // we are sending back telling them its a GET request
    Person.find().then((persons) => {
        res.send(persons);
    });
});

// add a new data to the db.
router.post("/data", (req, res, next) => {
    // const person = new Person(req.body);
    // PersonCollection.save();
    Person.create(req.body)
        .then((person) => {
            res.send({
                status: "data inserted",
                person,
            });
        })
        .catch(next); // this says if there is an error in inserting data, it will fire the function present in catch block (i.e next function).
    // next basically says "oke i am done here now go to the next middleware." Which will be our error handling.

    // we are sending back telling them its a POST request
});

// update data in the db.
// variable - id
router.put("/data/:id", (req, res, next) => {
    // we are sending back telling them its a PUT request
    res.send({ type: "PUT" });
});

// delete data in the db.
router.delete("/data/:id", (req, res, next) => {
    // we are sending back telling them its a DELETE request
    res.send({ type: "DELETE" });
});

// we can't test post, put and delete requests/routes because browser only works for get requests.
// we do that using postman.

module.exports = router;
