import { NavLink } from "react-router-dom";

const Navbar =() =>{
    return(
   <nav className="navbar">
    <h2 className="logo">Trasport App</h2>
    <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/report">Report</NavLink>
    <NavLink to="/complaints">Complaints</NavLink>
    <NavLink to="/check">Check</NavLink>
    </div>
   </nav>
    )
}
export default Navbar;
