import { NavLink } from "react-router-dom";

const Navbar =() =>{
    return(
   <nav className="navbar">
    <NavLink to="/" className="logo">Transport App</NavLink>
    <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/report">Report</NavLink>
    <NavLink to="/complaints">Complaints</NavLink>
    <NavLink to="/check">Check</NavLink>
    <NavLink to="/about">About</NavLink>
    <button className="theme-btn">Dark</button>
    </div>
   </nav>
    )
}
export default Navbar;
