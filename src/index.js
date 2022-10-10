const express = require("express");
const connect=require('./config/db');

//controllers....
const userController=require("./Controller/user.controller")

const app = express();

// Middleware....
app.use(express.json()); //for post
app.use("/users",userController);


app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (error) {
    console.log(error);
  }
});
