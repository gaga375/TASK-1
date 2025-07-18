# FleetLink - Logistics Vehicle Booking System

FleetLink is a full-stack logistics vehicle booking system that allows users to manage fleet vehicles, check availability based on capacity and route, and make bookings. Designed for B2B clients, the system ensures accurate availability checking and reliable booking.

---

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Testing**: Jest (for backend unit tests)
- **Optional Tools**: Axios, React Router,

---

## 📦 Features

### 🔧 Backend (Node.js + Express)

- Add a new vehicle to the system
- Search for available vehicles based on:
  - Required capacity
  - Route (From and To Pincode)
  - Start time
- Book a vehicle with ride duration estimation
- Prevent booking conflicts (handles overlapping time slots)
- Basic ride duration logic using simplified distance formula

### 🌐 Frontend (React)

- **Add Vehicle Page**
  - Form to add new vehicles (name, capacity, tyres)
  - Shows success/error messages

- **Search & Book Page**
  - Form to search vehicles using route and capacity
  - Lists matching available vehicles with:
    - Vehicle name
    - Capacity
    - Tyres
    - Estimated ride duration
    - “Book Now” button
  - Booking form with confirmation or conflict error display

---

## 🧠 Core Logic

### Ride Duration Calculation:
```js
estimatedRideDurationHours = Math.abs(toPincode - fromPincode) % 24
