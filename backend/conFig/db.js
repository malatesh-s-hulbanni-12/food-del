import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://malatesh:ma1234@cluster0.zvrabpw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}