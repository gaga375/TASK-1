import {Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage";
import Navbar from './Pages/NavBar';
import AddVehicle from './Pages/Addpage';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
function App() {
  return (
<div>
<Router>
  <Navbar/>
  <Routes>
<Route path='/' element={<LandingPage/>} />
<Route path='/home' element={<HomePage/>} />
<Route path='/add' element={<AddVehicle/>} />
<Route path='/contact' element={<Contact/>} />
  </Routes>
</Router>
</div>
  );
}

export default App;
