import NeWvehicle from "../models/addvehicle.js";

let addvehicle = async (req,res)=>{
    let {name,capacitykg, tyres} = req.body;

    let result = await new NeWvehicle({
     name:name,
     capacitykg:capacitykg,
     tyres:tyres
    })
    await result.save()
 
      return res.status(201).json({ success: true, message: "working",data:result });
}
export default {addvehicle}