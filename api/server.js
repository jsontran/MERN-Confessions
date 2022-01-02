const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://jsontran:MrWest2025@cluster0.lgoht.mongodb.net/MernVoid?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

const ThoughtsModel = require("./models/Thoughts");

app.get("/getThoughts", async (req, res) => {
  ThoughtsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createThoughts", async (req, res) => {
  const thought = req.body;
  const newThought = new ThoughtsModel(thought);

  try {
    await newThought.save();
    res.json(thought);
  } catch (error) {
    res.json(error);
  }
});

app.listen(process.env.PORT || 3001, () => console.log("CONNECTED"));
