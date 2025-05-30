import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);    
        console.log(`\nMongoDB connected successfully !! DB Host`, connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;