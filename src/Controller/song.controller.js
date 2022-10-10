
const express=require('express');
const router=express.Router();
const Song=require('../Model/song.model');


// Song Crud...
router.get("/", async (req, res) => {
    try {
      const songs = await Song.find().populate(["userId","artistId"]).lean().exec();
      return res.status(200).send({ songs: songs });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  // post Song...
  router.post("/", async(req,res)=>{
      try {
          const song=await Song.create(req.body);
          return res.status(201).send({song:song});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // single Song...
  router.get("/:id", async(req,res)=>{
      try {
          const song=await Song.findById(req.params.id).lean().exec();
          return res.status(201).send({song:song});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  //patch Song...
  router.patch("/:id", async(req,res)=>{
      try {
          const song=await Song.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
          return res.status(201).send({song:song});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // delete Song...
  router.delete("/:id", async(req,res)=>{
      try {
          const song=await Song.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(201).send({song:song});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  