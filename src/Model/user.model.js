const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema(
    {
      name: { type: String,required:true },
      email: { type: String,unique: true , required:true },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  //User Model
  
  const User = mongoose.model("User", UserSchema);
  

  module.exports=User;