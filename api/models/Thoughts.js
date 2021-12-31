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
        default: Date.now()
    }
})

const ThoughtsModel = mongoose.model("Thoughts", ThoughtsSchema);
module.exports = ThoughtsModel;