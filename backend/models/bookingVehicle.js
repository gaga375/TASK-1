import mongoose, { Schema, Types } from "mongoose";

let bookingSchema  = new Schema({
 vehicleId:
 { type:Schema.Types.ObjectId, 
    ref: "NeWvehicle" 
},
customerId:{
  type:String,
  required:true
},
  startTime:{
    type:Date
},

  endTime:{
    type:Date
},

  fromPincode:{
    type:String
},
 toPincode:{
    type:String
},
})


const Booking = mongoose.model("Booking",bookingSchema );
export default Booking;