//for importing dotenv like this we have to use dotenv.config and change the dev script in the package.json file
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
})

connectDB();
