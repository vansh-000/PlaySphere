//for importing dotenv like this we have to use dotenv.config and change the dev script in the package.json file
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// call database connection function
connectDB()
  .then(() => {
    // -> chech app connection error
    app.on('error',(error)=>{
        console.error("\n 🔴 App falied !!! ",err);
    })
    // -> listen app
    app.listen(process.env.PORT || 8000, () => {
        console.log(`\n 🟢 Server is running on the port : ${process.env.PORT}`)
    });
  })
.catch((err) => {
// connection function failed  
  console.error("\n 🔴 MongoDB connection function falied !!! ",err);
});
