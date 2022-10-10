

const express=require('express');
const router=express.Router();
const User=require('../Model/user.model');


// user Crud...
router.get("/", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send({ users: users });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  // post user...
  router.post("/", async(req,res)=>{
      try {
          const user=await User.create(req.body);
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // single user...
  router.get("/:id", async(req,res)=>{
      try {
          const user=await User.findById(req.params.id).lean().exec();
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  //patch user...
  router.patch("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // delete user...
  router.delete("/:id", async(req,res)=>{
      try {
          const user=await User.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(201).send({user:user});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  