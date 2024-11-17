import mongoose from "mongoose";
import { DB_NAME } from './../constants.js';

const connectDB = async () => {
    try {
        // connect database
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n 🟢 MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        // handle error
        console.error("\n 🔴 MONGODB Connection FAILED \n",error);
        process.exit(1)
    }
}

export default connectDB;