import mongoose from "mongoose";

const MONGO_URI = 'mongodb+srv://prekshagupta03:JYpMwIZqOejFg62G@cluster0.hgml1yy.mongodb.net/gql-db?retryWrites=true&w=majority&appName=Cluster0'


export const connectDB = async () => {
    try {
      const conn = await mongoose.connect(MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  };
  