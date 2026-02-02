const express = require("express");
const mongoose = require("mongoose");
const app = express(); 
const UserModel = require("./models/Users");
const cors = require("cors")

mongoose.connect("mongodb+srv://guillermoespjim_db_user:1234@cluster0.x6qucuz.mongodb.net/CursoDB?retryWrites=true&w=majority&appName=Cluster0");

app.listen(3001, ()=>{
    console.log("Server is ready");

}); //cualquier puerto menos el 3001 porque ese es para el frontend para react

app.get("/getUsers", (req, res) =>{
    UserModel.find().then(function (response){
        res.json(response);
    }).catch(function(err){
        res.json(err);
    })
});

app.delete('users/:id', async(req, res) =>{
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
