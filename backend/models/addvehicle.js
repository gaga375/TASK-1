import mongoose, { Schema, Types } from "mongoose";

let AddVehicle = new Schema({
     name:{
        type: String,
        required:true,
    },
      capacitykg:{
        type: Number,
        required:true,
    },
      tyres:{
        type: String,
        required:true,
    },
})

const NeWvehicle = mongoose.model("addvehicle",AddVehicle);
export default NeWvehicle;