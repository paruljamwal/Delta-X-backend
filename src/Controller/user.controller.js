

const express=require('express');
const app=express();

const User=require('../Model/user.model');


// usesr Crud...
app.get("/", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send({ users: users });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  // post user...
  app.post("/", async(req,res)=>{
      try {
          const user=await User.create(req.body);
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // single user...
  app.get("/:id", async(req,res)=>{
      try {
          const user=await User.findById(req.params.id);
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  //patch user...
  app.patch("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // delete user...
  app.delete("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndDelete(req.params.id);
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=app;
  