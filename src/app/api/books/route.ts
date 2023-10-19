import connectMongodb from '../../../../libs/mongodbbooks';
import BooksModel from '../../../../models/books';
import { NextResponse } from 'next/server';

 
(async() => {
    await connectMongodb();
})();
export async function GET() {
    try {
      const books = await BooksModel.find();
      return NextResponse.json({ books });
    } catch (error) {
      console.error("Error fetching books:", error);
      return NextResponse.json({ error: "Error fetching books" }, { status: 500 });
    }
  }
  export  async function POST(request:any)
 {
  
 //console.log(request);
 try {
   const {pages,filter}=await request.json();
   const limit=10;
   if(pages!=null && filter!=null)
   {
    // BooksModel.createIndexes({ title: "text", author: "text" });
    console.log(1);
    const skip=(pages-1)*10;
    const filterRegex = new RegExp(filter, 'i');

    const books = await BooksModel.find(
      { $text: { $search: filter } })
      .skip(skip)
      .limit(limit);
    return NextResponse.json({ books });
   }
   else if(pages!=null)
   {
    console.log(2);

    const skip=(pages-1)*10;
    
    const books = await BooksModel.find().skip(skip).limit(limit) ;
    return NextResponse.json({ books });
   }
   else if(filter!=null)
   {
    console.log(3);

    const books = await BooksModel.find({$text:{$search:filter}});
    return NextResponse.json({ books });
   }
   else{
     console.log(4);
   const books = await BooksModel.find();
  
   return NextResponse.json({ books });
   }
} catch (error) {
  console.error("Error fetching books:", error);
  return NextResponse.json({ error: "Error fetching books" }, { status: 500 });
}
 
}