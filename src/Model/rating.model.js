const mongoose=require("mongoose");

// Songs schema

const RatingSchema = new mongoose.Schema(
    {
      rating:{type:Number,enum:[0,1,2,3,4,5]},
      userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
      artistId:[{type:mongoose.Schema.Types.ObjectId,ref:"Artist"}],
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // Songs Model
  
  const Rate = mongoose.model("Rating", RatingSchema);

  module.exports= Rate;