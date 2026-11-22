import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar =() =>{
    const [open, setOpen] = useState(false); // dropdown khula hai (true) ya band (false)//
    return(
   <nav className="navbar">
    <NavLink to="/" className="logo">Transport App</NavLink>
    <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/report">Report</NavLink>
    <NavLink to="/complaints">Complaints</NavLink>
    <NavLink to="/check">Check</NavLink>
    <NavLink to="/about">About</NavLink>
    <div className="dropdown">
    <button className="dropdown-btn" onClick={()=>setOpen(!open)}>Account▼</button>
    {open &&(                /*its for long page*/                                     
        <div className="dropdown-menu">
          <NavLink to="/login" onClick={() =>setOpen(false)}>Login</NavLink>
          <NavLink to="/signup" onClick={() =>setOpen(false)}>Signup</NavLink>
        </div>
    )}
    </div>
    <button className="theme-btn">Dark</button>
    </div>
   </nav>
    )
}
export default Navbar;


// The pattern is always the same:

// <NavLink to="destination">Name shown on screen</NavLink>
// Destination = where it goes. Text = what the user sees.