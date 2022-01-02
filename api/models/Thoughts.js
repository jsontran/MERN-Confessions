const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThoughtsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  TW: {
    type: Boolean,
    required: true,
    default: false,
  },

  expire_at: { type: Date, default: Date.now, expires: 7200 },
});

const ThoughtsModel = mongoose.model("Thoughts", ThoughtsSchema);
module.exports = ThoughtsModel;
