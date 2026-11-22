// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import Complaints from "./pages/Complaints";
import Check from "./pages/Check";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  // const [complaints, setComplaints] = useState(() => {
  //   const saved = localStorage.getItem("complaints");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("complaints", JSON.stringify(complaints));
  // }, [complaints]);

  // const addComplaint = (c) => setComplaints([c, ...complaints]);


  return(
    <div className="app.layout">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/report" element={<Report />}/>
      <Route path="/complaints" element={<Complaints/>} />
      <Route path="/check" element={< Check/>} />
      <Route path="/about" element={< About/>}/>
      <Route path="/login" element={< Login />} />
      <Route path="/signup" element={< Signup />}/>
    </Routes>
    <Footer />
    </div>
  )
};
export default App;







