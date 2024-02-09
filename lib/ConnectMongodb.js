import mongoose from "mongoose";
export async function ConnectMongoDb() {
  const mongoDburl =
    "mongodb+srv://Lokendra:loki123@cluster0.rfzagxa.mongodb.net/";
  try {
    await mongoose.connect(mongoDburl);
  } catch (error) {
    console.log(error);
  }
}
