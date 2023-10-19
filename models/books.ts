import mongoose, { Schema } from "mongoose";

const BookSchema=new Schema({
    title:String,
    author:String,
    isbn:String,
    pageCount:String,
    publishedDate:String,
    thumbnailUrl:String,
    imageUrl:String,
});
const Books=mongoose.models.books || mongoose.model("books",BookSchema);

export default Books;