import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";


const Navbar =() =>{
    const [open, setOpen] = useState(false); // dropdown khula hai (true) ya band (false)//
    const {theme, dispatch} = useContext(ThemeContext);
    
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
    <button className="theme-btn" onClick={() => dispatch({ type: "THEME_TOGGLE" })}>
       {theme === "dark" ? "light" : "dark"}
    </button>
    {/* <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE" })}>
  {theme === "light" ? "Dark" : "Light"}
</button> */}
    </div>
   </nav>
    )
}
export default Navbar;


// The pattern is always the same:

// <NavLink to="destination">Name shown on screen</NavLink>
// Destination = where it goes. Text = what the user sees.