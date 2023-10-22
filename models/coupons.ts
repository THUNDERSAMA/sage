import mongoose, { Schema } from "mongoose";

const CouponSchema=new Schema({
    code:String,
    author_id:String,
    value:Number,
    type:String,
    bid:String,
    max_use:String,
    created_at:String,
    validity:String,
    status:String,

});
const Coupons=mongoose.models.coupons || mongoose.model("coupons",CouponSchema);

export default Coupons;