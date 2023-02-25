import React, { useState } from "react";
import "./App.css";
import Verizon from "./images/verizon.png";
import Wpi from "./images/wpi.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 style={{ textAlign: "center" }}>Daily Worksheet</h1>
      <Form />
      <Icons />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <h1>Mungovan-Land</h1>
    </nav>
  );
}

function Form() {
  const [jobType, setJobType] = useState("");
  const [showRoutes, setShowRoutes] = useState(false);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [objectType, setObjectType] = useState("");
  const [numObjects, setNumObjects] = useState(0);

  const handleJobTypeChange = (event) => {
    const jobTypeValue = event.target.value;
    setJobType(jobTypeValue);

    if (jobTypeValue === "Delivery") {
      setShowRoutes(true);
    } else {
      setShowRoutes(false);
    }
  };

  const handleFromLocationChange = (event) => {
    const fromLocationValue = event.target.value;
    setFromLocation(fromLocationValue);
  };

  const handleToLocationChange = (event) => {
    const toLocationValue = event.target.value;
    setToLocation(toLocationValue);
  };

  const handleObjectTypeChange = (event) => {
    const objectTypeValue = event.target.value;
    setObjectType(objectTypeValue);
  };

  const handleNumObjectsChange = (event) => {
    const numObjectsValue = event.target.value;
    setNumObjects(numObjectsValue);
  };

  return (
    <form action="https://formspree.io/f/mvonajop" method="post">
      <Input name="name" type="text" placeholder="Enter your Name..." />
      <Input name="email" type="email" placeholder="Enter your Email..." />
      <Select
        name="Job Type"
        options={[
          "Cleanout",
          "Delivery",
          "Pickup",
          "Internal-move",
          "Disposition",
        ]}
        onChange={handleJobTypeChange}
      />
      {showRoutes && (
        <div className="route">
          <Input
            className="location"
            name="From"
            type="text"
            placeholder="Enter From Location"
            onChange={handleFromLocationChange}
          />
          To
          <Input
            className="location"
            name="To"
            type="text"
            placeholder="Enter To Location"
            onChange={handleToLocationChange}
          />
        </div>
      )}
      <Select
        name="Object Type"
        options={["Gaylords", "Cones", "Tarps", "Masonite"]}
        onChange={handleObjectTypeChange}
      />
      <Input
        name="Number of Objects"
        type="number"
        placeholder="Enter Number of Objects"
        onChange={handleNumObjectsChange}
      />
      <TextArea name="message" rows={10} placeholder="Enter Message" />
      <Button type="submit" value="Send" />
    </form>
  );
}

function Input({ name, type, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      style={{ padding: "0.5rem", borderRadius: "16px" }}
    />
  );
}

function Select({ name, options, onChange }) {
  return (
    <select
      name={name}
      style={{ padding: "0.5rem", borderRadius: "16px" }}
      onChange={onChange}
    >
      <option value="">Choose an option</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function TextArea({ name, rows, placeholder }) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      style={{ padding: "0.5rem", borderRadius: "16px" }}
    />
  );
}

function Button({ type, value }) {
  return (
    <input
      type={type}
      value={value}
      style={{
        width: "fit-content",
        backgroundColor: "green",
        color: "yellow",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        border: "none",
        boxShadow: "1px 1px 5px black",
        margin: "auto",
      }}
    />
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
