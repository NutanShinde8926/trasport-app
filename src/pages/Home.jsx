import { NavLink } from "react-router-dom";

const Home = ()=> {
    return(
        <div className="Home">
           <div className="hero">
             <h1>Bad ride? Report it.</h1>
             <p>Extra passengers, charged twice, an overcrowded bus. 
                Report the problem with the vehicle number, 
                and check any ride before you board.</p>

            <div className="hero-buttons">
            <NavLink to="/report">REPORT PROBLEM</NavLink>
            <NavLink to="/check">Check Ride</NavLink>

           </div>
           </div>
        </div>
    )
};
export default Home;
