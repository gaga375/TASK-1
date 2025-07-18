import { Link } from "react-router-dom"

export default function Navbar (){
    return(
        <div className="NavbarContainer">
    <div className="Navleft">
       <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }}>
       <span className="Homeicon">Home</span>
       </Link>

         <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }} >
           <span className="addVehicle">Add Vehicle</span>
         </Link>
       
     
    </div>
    <div className="Navmiddle">
     <div style={{display:"flex" , justifyContent:"space-between"}}> 
        <div>
            <input type="text" placeholder="filter vehicle by kg" /> 
        </div>
    <div>
        <button className="Navmiddlebutton">Search</button> 
    </div>
          
     </div>
    </div>
     <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }} >
    <div className="Navright"> contact </div>
    </Link>
        </div>
    )
}