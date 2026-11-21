import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import Complaints from "./pages/Complaints";
import Check from "./pages/Check";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () =>{
  return(
    <div className="app.layout">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/report" element={<Report />}/>
      <Route path="/complaints" element={<Complaints/>} />
      <Route path="/check" element={< Check/>} />
      <Route path="/about" element={< About/>}/>
    </Routes>
    <Footer />
    </div>
  )
}
export default App;