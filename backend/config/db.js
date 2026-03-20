import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://induwara20030912_db_user:9b7eb3JTHcmNl0QY@cluster0.mahj7of.mongodb.net/WatchSite")
    .then(() => console.log('DB CONNECTED'))
}