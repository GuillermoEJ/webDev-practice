const express = require("express");
const mongoose = require("mongoose");
const app = express(); 
const UserModel = require("./models/Users");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 3001;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/getUsers", (req, res) =>{
    UserModel.find().then(function (response){
        res.json(response);
    }).catch(function(err){
        res.json(err);
    })
});

app.get('/getUser/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.put("/updateUser/:id", async(req,res)=>{
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedUser);
    } catch(err){
        res.status(400).json({message: err.message});
    }
});

app.delete('/users/:id', async(req, res) =>{
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.json({message:'Item deleted'});
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

app.post("/createUser", async(req,res) =>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();
    res.json(user)
});
