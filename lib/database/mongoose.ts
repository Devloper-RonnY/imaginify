import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Declare a global mongoose object for serverless environments
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Use a global cache for the connection
const cached: MongooseConnection = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) {
    console.log("Using existing MongoDB connection.");
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection...");
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: "Imaginify",
      bufferCommands: false,
      connectTimeoutMS: 10000, // Optional: Set a timeout
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error; // Re-throw to handle it upstream
  }

  return cached.conn;
};
