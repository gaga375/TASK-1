import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LandingPage (){

    const navigate = useNavigate();

let [capacity , setCapicty] = useState("")
let [fromPincode , setFromPincode] = useState("")
let [ToPincode , setToPincode] = useState("")
let [startTime, setStartTime] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.get(
      `http://localhost:8080/available?capacity=${capacity}&fromPincode=${fromPincode}&toPincode=${ToPincode}&startTime=${startTime}`
    );

    const result = res.data;
    if (result.success && result.data.length) {
     
 navigate("/home", { state: { vehicles: result.data,bookdata:{fromPincode,ToPincode,startTime} } });

    
    } else {
      alert("No vehicle found");
    }
  } catch (err) {
    console.log("API error:", err);
  }
};

    return(
        <div className="Landingbody">
           <div className="Landing_heading">search aivlable vehicel</div>
  <div className="landingformcontainer">
    <form onSubmit={handleSubmit}>

     <label> capicty <br />
        <input type="number" value={capacity} onChange={(e) => setCapicty(e.target.value)} placeholder="enter capicty ex.. 300kg"/>
     </label>
<br />

     <label> from Pincode <br />
        <input type="number" value={fromPincode} onChange={(e) => setFromPincode(e.target.value)}  placeholder="ex.. 480661"/>
     </label>

     <br />
     <label>  to Pincode <br />
        <input type="number" value={ToPincode} onChange={(e) => setToPincode(e.target.value)} placeholder="ex. 480881"/>
     </label>
<br />
     
     <label> start Time <br />
        <input type="datetime-local"  value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="enter capicty ex.. 300kg"/>
     </label>
     <br />
     <button type='submit'>search</button>
    </form>
  </div>

        </div>
    )
}