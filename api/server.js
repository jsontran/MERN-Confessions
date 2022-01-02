const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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
  try {
    const getThoughts = await ThoughtsModel.find();
    res.json(getThoughts);
  } catch (error) {
    res.json(error);
  }
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

app.listen(3001, () => console.log("Server started on port 3001"));
