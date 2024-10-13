import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        // If already connected, use the existing connection.
        console.log("Already connected to MongoDB.");
        return;
    }

    try {
        // Create a new connection if not already connected.
        const db = await mongoose.connect(MONGODB_URI, {
            dbName : "studentManagement",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default dbConnect;
