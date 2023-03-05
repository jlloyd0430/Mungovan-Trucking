import React, { useState } from "react";
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
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password === "mungoland") {
      setLoggedIn(true);
    }
  }

  return (
    <div className="container">
      <div className="row">
        {<Header />}
        {<Navbar />}
      </div>
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mission" element={<Mission />} />
          {loggedIn ? (
            <Route path="/contact" element={<Contact />} />
          ) : (
            <Route
              path="/contact"
              element={
                <PasswordPrompt
                  handleSubmit={handleSubmit}
                  handlePasswordChange={handlePasswordChange}
                />
              }
            />
          )}
        </Routes>
      </div>
      <Icons />
      <Footer />
    </div>
  );
}

function PasswordPrompt({ handleSubmit, handlePasswordChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
      <div>
        this page is for Mungovan employees         ONLY for submiting daily worksheets
      </div>
    </form>
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

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <hr style={{ borderTop: "1px solid yellow" }} />
            <p className="disc">
          Disclosure: This application is still under construction, if you wish
          to request a feature just message me at 7748135597
        </p>
            <p className="foot" >&copy; 2023 Mungovan Trucking LLC</p>
            <p className="foot" >Email: mungovantrucking@icloud.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
