import { useLocation } from "react-router-dom";
import "./VehicleList.css"; 
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function VehicleListPage() {
   const navigate = useNavigate();

  const location = useLocation();
  const vehicles = location.state?.vehicles || [];
    const bookingdata = location.state?.bookdata || [];
  
const id = uuidv4();
async function handleBooking(_id) {
  try {
    const res = await axios.post("http://localhost:8080/bookings", {
      vehicleId: _id,
      customerId: id,
      fromPincode: bookingdata.fromPincode,
      toPincode: bookingdata.ToPincode,
      startTime: bookingdata.startTime,
    });

    // Success response
    if (res?.data?.message) {
      alert(` Booking Successful: ${res.data.message}`);
  navigate("/")
    } else {
      alert(" Booking Successful");
    }
  } catch (error) {
    // Safely access error message
    const message =
      error?.response?.data?.message ||
      error?.message ||
      " Something went wrong while booking.";

    alert(message);
    
  }
}


  return (
    <div className="home-page-body">
      <h2 className="page-heading">Available Vehicles</h2>

      <div className="card-container">
        {vehicles.length > 0 ? (
          vehicles.map((v, i) => (
            <div className="card" key={i}>
              <div className="card-title">{v.name}</div>
              <div className="card-detail">Capacity: {v.capacitykg}kg</div>
              <div className="card-detail">Tyres: {v.tyres}</div>
              <button onClick={() => handleBooking(v._id)} >Book Now</button>
            </div>
          ))
        ) : (
          <p className="no-data">No vehicles available.</p>
        )}
      </div>
    </div>
  );
}
