import React, { useState } from "react";
import "./App.css";

function Home() {
  const [jobType, setJobType] = useState("");
  const [showRoutes, setShowRoutes] = useState(false);
  const [showOneLocation, setShowOneLocation] = useState(false);
  const [location, setLocation] = useState("");
  const [objectType, setObjectType] = useState("");
  const [numObjects, setNumObjects] = useState(0);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const handleJobTypeChange = (event) => {
    const jobTypeValue = event.target.value;
    setJobType(jobTypeValue);

    if (jobTypeValue === "Delivery") {
      setShowRoutes(true);
      setShowOneLocation(false);
    } else if (
      jobTypeValue === "Cleanout" ||
      jobTypeValue === "Pickup" ||
      jobTypeValue === "Internal-move" ||
      jobTypeValue === "Disposition"
    ) {
      setShowRoutes(false);
      setShowOneLocation(true);
    } else {
      setShowRoutes(false);
      setShowOneLocation(false);
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

  const handleLocationChange = (event) => {
    const locationValue = event.target.value;
    setLocation(locationValue);
  };

  const handleObjectTypeChange = (event) => {
    const objectTypeValue = event.target.value;
    setObjectType(objectTypeValue);
  };

  const handleNumObjectsChange = (event) => {
    const numObjectsValue = event.target.value;
    setNumObjects(numObjectsValue);
  };

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setDate(dateValue);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const [addJob, setAddJob] = useState(false);

  const handleAddJobChange = (event) => {
    setAddJob(event.target.checked);
  };

  return (
    <form action="https://formspree.io/f/mvonajop" method="post">
      <Title className="Title" />
      <div className="name-date-section">
        {" "}
        <div className="name-section">
          <Input name="name" type="text" placeholder="Enter your Name..." />
          <div style={{ marginTop: "1rem" }}>
            <Input name="date" type="date" onChange={handleDateChange} />
          </div>
        </div>
      </div>
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
      {showOneLocation && (
        <Input
          className="location"
          name="Location"
          type="text"
          placeholder="Enter To Location"
          onChange={handleToLocationChange}
        />
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
      <label htmlFor="image-upload"></label>
      <input id="image-upload" type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={addJob}
            onChange={handleAddJobChange}
          />
          Add job
        </label>
      </div>
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
      <option value="">Choose an JobType</option>
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

function Title() {
  return <h1>Daily Worksheet</h1>;
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

export default Home;
