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
    // console.log(req.body);  we get an object which the user sends in the body. we will use it to update the record.
    // we can pass 3rd param "{new: true}" in findbyidandupdate to return the new updated object instead of the record which was found which had old data.
    // {new: true} = return the modified document rather than original.
    Person.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
    }).then(function (record) {
        res.send(record);
    });
    // we are sending back telling them its a PUT request
    // res.send({ type: "PUT" });
});

// delete data in the db.
router.delete("/data/:id", (req, res, next) => {
    const id = req.params.id;
    Person.findByIdAndRemove({ _id: id }).then((record) => {
        res.send({ deletedRecord: record });
    });
});

// we can't test post, put and delete requests/routes because browser only works for get requests.
// we do that using postman.

module.exports = router;
