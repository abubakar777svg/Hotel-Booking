import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Hotel-Booking-System",
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
