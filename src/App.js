import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Mission from "./Mission";
import Verizon from "./images/verizon.png";
import Wpi from "./images/wpi.png";

function App() {
  return (
    <div className="container">
      <div className="row">
        {<Header />}
        {<Navbar />}
      </div>
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Icons />
    </div>
  );
}

function Icons() {
  return (
    <div className="icons">
      <img src={Verizon} alt="Verizon" />
      <img src={Wpi} alt="WPI" />
    </div>
  );
}

export default App;
