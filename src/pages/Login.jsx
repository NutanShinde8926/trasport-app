import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login =() =>{
     const[email, setEmial] = useState("");
     const[password, setPassword] = useState("");
     const[error, setError] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(email === "shindenutan630@gmail.com" && password === "123456") {
          navigate("/");
        } else {
            setError("wrong email or password")
        }
    };
    return(
        <div className="auth">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" required 
                 value={email}
                 onChange={(e)=>setEmial(e.target.value)}/>
                <input type="password" placeholder="Password" required
                minLength={6}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
                <p>New here? <NavLink to="/signup">Signup</NavLink></p>
            </form>
        </div>
    )
};
export default Login;