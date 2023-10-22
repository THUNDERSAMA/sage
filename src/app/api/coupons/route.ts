import { NextResponse } from "next/server";
//import Books from "../../../../models/books";
import  datetime  from "@/app/api/datetime";
import connectMongodb from "../../../../libs/mongodbbooks";
import Coupons from "../../../../models/coupons";
(async() => {
    await connectMongodb();
})();
export  async function POST(request:any)
{
    
    try {
        
        const jsonar=await request.json();
        console.log(jsonar);
    // const {author_id,type} = await request.json();
    const {author_id,type,bid,max_use,validity,value}=jsonar;
    console.log(author_id);
        const created_at=datetime;
        const status=1;
        console.log(created_at);
      await Coupons.create({author_id,type,bid,max_use,validity,value,created_at,status});
        return NextResponse.json({message:"coupon created",status:200},{status:201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"error detected",status:400,error:error},{status:401})
    }
    
}