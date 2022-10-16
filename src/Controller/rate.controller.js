
const express=require('express');
const router=express.Router();
const Rate=require('../Model/rating.model');
const { body, validationResult } = require('express-validator');

// rating Crud...
router.get("/", async (req, res) => {
    try {
      const rates = await Rate.find().populate(["userId","artistId"]).lean().exec();
      return res.status(200).send({ rates: rates });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  // post Rate...
  router.post("/",
  // validations...
  body("rating").not().isEmpty(),
  body('userId').trim().not().isEmpty(),
  body('artistId').trim().not().isEmpty()
   
  
  ,async(req,res)=>{
      try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

          const rate=await Rate.create(req.body);
          return res.status(201).send({rate:rate});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // single Song...
  router.get("/:id", async(req,res)=>{
      try {
          const rate=await Rate.findById(req.params.id).lean().exec();
          return res.status(201).send({rate:rate});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  //patch Song...
  router.patch("/:id", async(req,res)=>{
      try {
          const rate=await Rate.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
          return res.status(201).send({rate:rate});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });
  
  // delete Song...
  router.delete("/:id", async(req,res)=>{
      try {
          const rate=await Rate.findByIdAndDelete(req.params.id).lean().exec();
          return res.status(201).send({rate:rate});
  
      } catch (error) {
          return res.status(500).send({ message: error.message }); 
      }
  });

  module.exports=router;
  