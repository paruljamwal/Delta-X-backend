const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json()); //for post

const PORT = process.env.PORT 
const connect=require('./config/db');

//controllers....
const artistController=require("./Controller/artist.controller");
const songContrpller=require("./Controller/song.controller");
const ratingController=require("./Controller/rate.controller");
const {register,login}=require("./Controller/user.controller");


// Middleware....
app.post("/register",register);
app.post("/login",login);
app.use("/song",songContrpller);
app.use("/artist",artistController);
app.use("/rating",ratingController)



app.listen(PORT, async () => {
    try {
      await connect();
      console.log(`Listening on port ${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
  