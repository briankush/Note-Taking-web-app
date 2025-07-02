import mongoose from "mongoose";

export const connectDB= async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/noteapp")
        console.log("connected successfully");
        
    } catch (error) {
        console.error("Connection Error", error);
    }
}