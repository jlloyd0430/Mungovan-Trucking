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

  // Define additional state variables
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [additionalObjectType, setAdditionalObjectType] = useState("");

  
  // Define event handler for checkbox
  const handleAddJobChange = (event) => {
    setShowAdditionalFields((prevFields) => [...prevFields, {}]);
  };

  // Define event handler for additional object type select
  const handleAdditionalJobTypeChange = (index, event) => {
    const additionalObjectTypeValue = event.target.value;
    setAdditionalObjectType((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].additionalObjectType = additionalObjectTypeValue;
      return updatedFields;
    });
  };

  const handleFromLocationChange = (index, event) => {
    const fromLocationValue = event.target.value;
    setFromLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].fromLocation = fromLocationValue;
      return updatedFields;
    });
  };

  const handleToLocationChange = (index, event) => {
    const toLocationValue = event.target.value;
    setToLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].toLocation = toLocationValue;
      return updatedFields;
    });
  };

  const handleLocationChange = (index, event) => {
    const locationValue = event.target.value;
    setLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].location = locationValue;
      return updatedFields;
    });
  };

  const handleObjectTypeChange = (index, event) => {
    const objectTypeValue = event.target.value;
    setObjectType((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].objectType = objectTypeValue;
      return updatedFields;
    });
  };

  const handleNumObjectsChange = (index, event) => {
    const numObjectsValue = event.target.value;
    setNumObjects((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].numObjects = numObjectsValue;
      return updatedFields;
    });
  };

  const handleDateChange = (index, event) => {
    const dateValue = event.target.value;
    setDate((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].date = dateValue;
      return updatedFields;
    });
  };

  const handleImageChange = (index, event) => {
    setImage((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].image = event.target.files[0];
      return updatedFields;
    });
  };

  const handleRemoveJob = (index) => {
    setShowAdditionalFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setAdditionalObjectType((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setFromLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setToLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setLocation((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setObjectType((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });
    setNumObjects((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields.splice(index, 1);
      return updatedFields;
    });

    const [addJob, setAddJob] = useState(false);

    return (
      <form action="https://formspree.io/f/mvonajop" method="post">
        <Title className="Title" />
        <div className="name-date-section">
          <div className="name-section">
            <Input
              name="name"
              type="text"
              placeholder="Enter your Name..."
              style={{ height: "2rem" }}
            />

            <div className="date-section">
              <label htmlFor="date-input">Date</label>
              <Input
                id="date-input"
                name="date"
                type="date"
                onChange={handleDateChange}
              />
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
        // placeholder="Choose an item"
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
              checked={showAdditionalFields}
              onChange={handleAddJobChange}
            />
            Add job
          </label>
        </div>
        {/* Include additional fields if checkbox is checked */}
        {showAdditionalFields && (
          <>
            <Select
              name="Additional Job Type"
              options={[
                "Cleanout",
                "Delivery",
                "Pickup",
                "Internal-move",
                "Disposition",
              ]}
              onChange={handleAdditionalJobTypeChange}
            />
            <TextArea
              name="additionalMessage"
              rows={10}
              placeholder="Enter Additional Message"
            />
          </>
        )}
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
}
export default Home;
