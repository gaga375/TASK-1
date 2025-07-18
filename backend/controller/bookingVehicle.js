import Booking from "../models/bookingVehicle.js";
import NeWvehicle from "../models/addvehicle.js";

const bookVehicle = async (req, res) =>{
  try {
    const { vehicleId, fromPincode, toPincode, startTime, customerId } = req.body;

    if (!vehicleId|| !fromPincode|| !toPincode|| !startTime|| !customerId) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const vehicle = await NeWvehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: "Vehicle not found" });
    }

    const start = new Date(startTime);

    const estimatedHours = Math.abs(parseInt(toPincode) - parseInt(fromPincode)) % 24 || 1;
    const end = new Date(start.getTime() + estimatedHours * 60 * 60 * 1000);

    const conflict = await Booking.findOne({
      vehicleId,
      $or: [
        {
          startTime: { $lt: end },
          endTime: { $gt: start }
        }
      ]
    });

    if (conflict) {
      return res.status(409).json({
        success: false,
        message: "Vehicle is alredy booked in this time range"
      });
    }

    const newBooking = await Booking.create({
      vehicleId,
      customerId,
      fromPincode,
      toPincode,
      startTime: start,
      endTime: end
    });

    return res.status(201).json({
      success: true,
      message: "Vehicle booked successfully",
      data: newBooking
    });

  } catch (e) {
    console.error("Booking error:", e);
    return res.status(500).json({ success: false, message: "Server error", error: e });
  }
};

export default bookVehicle;
