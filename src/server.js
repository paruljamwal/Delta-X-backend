const app=require("./index");
const connect=require('./config/db');

const PORT = process.env.PORT 

app.listen(PORT, async () => {
    try {
      await connect();
      console.log(`Listening on port ${PORT}`);
    } catch (error) {
      console.log(error);
    }
  });
  