const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThoughtsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
})

const ThoughtsModel = mongoose.model("Thoughts", ThoughtsSchema);
module.exports = ThoughtsModel;