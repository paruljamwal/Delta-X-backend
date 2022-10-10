
const express=require('express');
const router=express.Router();
const Artist=require('../Model/artist.model');


// Artist Crud...

router.get("/", async (req, res) => {
    try {
      const artists = await Artist.find().lean().exec();
      return res.status(200).send({ artists: artists });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  // post Artist...
  router.post("/", async(req,res)=>{
      try {
          const artist=await Artist.create(req.body);
          return res.status(201).send({artist:artist});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // single Artist...
  router.get("/:id", async(req,res)=>{
      try {
          const artist=await Artist.findById(req.params.id).lean().exec();
          return res.status(201).send({artist:artist});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  //patch Artist...
  router.patch("/:id", async(req,res)=>{
      try {
          const artist=await Artist.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
          return res.status(201).send({artist:artist});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // delete Artist...
  router.delete("/:id", async(req,res)=>{
      try {
          const artist=await Artist.findByIdAndDelete(req.params.id).lean().exec().lean().exec();
          return res.status(201).send({artist:artist});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  