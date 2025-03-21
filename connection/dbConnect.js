import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION));
    if (conn) {
      console.log("connected");
    }
    return conn;
  } catch (err) {
    console.error(err);
  }
}
