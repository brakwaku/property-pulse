import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the database is already connected, return the existing connection
    if (connected) {
        console.log("MongoDB is already connected");
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MongoDB is connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB");
        console.error(error);
    }
};

export default connectDB;
