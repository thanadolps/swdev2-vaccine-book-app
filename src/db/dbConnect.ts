import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect(
  uri?: string,
  options?: mongoose.ConnectOptions
) {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  }

  if (!uri) {
    uri = process.env.MONGO_URI;
  }
  if (!uri) {
    throw new Error("MONGO_URI environment variable not set");
  }

  try {
    await mongoose.connect(uri, options);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
}
