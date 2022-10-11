const express = require("express");

//controllers....
const artistController=require("./Controller/artist.controller");
const songContrpller=require("./Controller/song.controller");
const {register,login}=require("./Controller/user.controller")
const app = express();
const cors = require("cors");
// Middleware....
app.use(express.json()); //for post
app.post("/register",register);
app.post("/login",login);
app.use("/song",songContrpller);
app.use("/artist",artistController);
app.use(cors());


module.exports=app;