const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://jsontran:MrWest2025@cluster0.lgoht.mongodb.net/MernVoid?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

const Thoughts = require('./models/Thoughts');
const ThoughtsModel = require('./models/Thoughts');

app.get('/getThoughts', async(req,res) => {
    ThoughtsModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post('/confession/new', (req,res) => {
    const confession = new Thoughts({
        text: req.body.text
    });
    confession.save();
    res.json(confession);

});

app.delete('/confession/delete/:id', async (req,res) =>{
    const result = await Thoughts.findByIdAndDelete(req.params.id)

    res.json(result);
})

app.put('/confession/complete:id', async (req,res) => {
    const confession = await Thoughts.findbyId(req.params.id);
    confession.complete = !confession.complete;
    confession.save();
    res.json(confession);

})

app.listen(3001, () => console.log("Server started on port 3001"));
