import { Router } from "express";
import addvehicle from "../controller/addvehicle.js";
import getAvailableVehicle from '../controller/aivlablebooking.js'
import bookVehicle from "../controller/bookingVehicle.js";

let router = Router();

router.route("/new").post(addvehicle.addvehicle);
router.route('/available').get(getAvailableVehicle);
router.route('/bookings').post(bookVehicle)


export default  router