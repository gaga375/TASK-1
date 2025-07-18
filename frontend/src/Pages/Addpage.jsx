import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddVehicle(){
    const navigate = useNavigate();
    let [carName , setCarName] = useState('');
    let [capCapacity , setCapacity] = useState('')
    let [carTyres , setcarTyres] = useState('')


const handleSubmit = async (e) => {
  e.preventDefault();
if(carName && capCapacity && carTyres){
 let res = await axios.post("https://task-1-server-0ro7.onrender.com/new",{
name:carName,
capacitykg:capCapacity,
tyres:carTyres
  })
if( res.status == 201){
alert('car add successfully')
    navigate("/")

}
else{
   alert(res.data.message)
}
}
else{
    alert("please fill all details")
}

 
}

    return(
        <div className="ADDVEHICLEBODY" >
 <div className="add_hedding">Add vehicles</div>

 <div className="formContainer">
    <form action="" onSubmit={handleSubmit}>

        <label >car Name
        <input type="text" value={carName} onChange={(e) => setCarName(e.target.value)} placeholder="enter car naem" />
        </label>
<br />
          <label >car Capacity
        <input type="number" value={capCapacity} onChange={(e) => setCapacity(e.target.value)} placeholder="enter car Capacity ex. 300kg" />
        </label>
<br />
         <label >car tyres
        <input type="number" value={carTyres} onChange={(e) => setcarTyres(e.target.value)}  placeholder="enter car tyers ex. 2 , 3" />
        </label>
<br />
        <button>Add vehicles</button>
    </form>
 </div>
        </div>
        
    )
}