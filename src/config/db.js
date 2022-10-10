const mongoose = require("mongoose");

// how mongoose connect with mongodb....
const connect = () => {
    return mongoose.connect(
      "mongodb+srv://Parul:Parul@cluster0.wq7qrqg.mongodb.net/DeltaX?retryWrites=true&w=majority"
    );
  };

module.exports= connect;