import mongoose from "mongoose";

const connectMongodb=async()=> {
  try {
    const uri:string=process.env.MONGODB_URI!;
  await mongoose.connect(uri);
    console.log("Pinged books deployment. You successfully connected to MongoDB!");
  } 
  catch(error){
    console.log(error);
  }
  
}
export default connectMongodb;