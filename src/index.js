const express = require("express");

//controllers....
const userController=require("./Controller/user.controller");
const artistController=require("./Controller/artist.controller");
const songContrpller=require("./Controller/song.controller");

const app = express();

// Middleware....
app.use(express.json()); //for post
app.use("/users",userController);
app.use("/song",songContrpller);
app.use("/artist",artistController);

module.exports=app;