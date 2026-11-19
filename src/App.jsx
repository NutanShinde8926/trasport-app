import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import Complaints from "./pages/Complaints";
import Check from "./pages/Check";
import Footer from "./components/Footer";

const App = () =>{
  return(
    <div>
    <Navbar />
    <Footer />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/report" element={<Report />}/>
      <Route path="/complaints" element={<Complaints/>} />
      <Route path="/check" element={< Check/>} />
    </Routes>
    </div>
  )
}
export default App;