
const mongoose=require("mongoose");


// Artist schema
const artistSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      DOB: { type: String, required: true },
      Bio: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  // Artist Model
  const Artist = mongoose.model("Artist", artistSchema);
  
  module.exports=Artist;