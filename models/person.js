const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create person schema and model.
const PersonSchema = new Schema({
    name: {
        type: String,
        // 2nd field is invalidation error message.
        required: [true, "Name field is required"],
    },
    age: {
        type: Number,
    },
    available: {
        type: Boolean,
        default: false,
    },
});

// Name of our collection is PersonCollection.
// MongoDB Atlas will rename the PersonCollection to PersonCollections.
const Person = mongoose.model("PersonCollection", PersonSchema);

module.exports = Person;
