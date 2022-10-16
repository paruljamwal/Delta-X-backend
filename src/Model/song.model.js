const mongoose=require("mongoose");

// Songs schema

const SongSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      cover: { type: String, required: true },
      userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
      artistId:[{type:mongoose.Schema.Types.ObjectId,ref:"Artist"}],
      rating:{type:mongoose.Schema.Types.ObjectId,ref:"Rating"}
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // Songs Model
  
  const Song = mongoose.model("Song", SongSchema);

  module.exports= Song;