const mongoose=require("mongoose");

// Songs schema

const SongSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      Cover: { type: String, required: true },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // Songs Model
  
  const Song = mongoose.model("Song", SongSchema);

  module.exports= Song;