import NeWvehicle from "../models/addvehicle.js";
import Booking from "../models/bookingVehicle.js";


let getAvailableVehicle = async (req,res)=>{

    try{

    
    let { capacity, fromPincode, toPincode, startTime } = req.query;

    console.log(capacity )

   // console.log(capacity , fromPincode ,toPincode ,startTime )

    if (!capacity || !fromPincode || !toPincode || !startTime) {
      return res.status(400).json({ success: false, message: "Missing required query parameters" });
    }
      
     let start = new Date(startTime);

     let distance = Math.abs(parseInt(fromPincode)- parseInt(toPincode));

    // console.log(distance)

     let estimatedHours = distance / 24 ||1;

     let end = new Date(start.getTime() + estimatedHours * 60 * 100);
     
 //console.log(end)

     let vehicles = await NeWvehicle.find({
        capacitykg:{$gte:Number(capacity)}
     });

  // console.log(vehicles)

     let availableVehicle = [];

     for (let vehicle of vehicles){
        let bookingExists = await Booking.findOne({
            vehicleId:vehicle._id,
            $or:[
              {
                startTime:{$lt:end},
                endTime:{$gt:start}
              }
            ]
        });
      //  console.log(bookingExists)
        if(! bookingExists){
            availableVehicle.push(vehicle);
        }
     }
     return res.status(201).json({success:true,message:'Available veicle fetche',estimatedHours:estimatedHours,data:availableVehicle});
    }
    catch(e){
         return res.status(500).json({success:false,message:'Server error',e:e})
    }
    
}

export default  getAvailableVehicle