import { useState } from "react";

function Home() {
  const [showToLocationInput, setShowToLocationInput] = useState(false);
  const [objectType, setObjectType] = useState("");
  const [numObjects, setNumObjects] = useState(0);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleToLocationChange = (event) => {
    const value = event.target.value;
    setShowToLocationInput(value === "Other");
  };

  const handleObjectTypeChange = (event) => {
    setObjectType(event.target.value);
  };

  const handleNumObjectsChange = (event) => {
    setNumObjects(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with form data (e.g. send it to a server)
    console.log({
      toLocation: showToLocationInput ? "Other" : "",
      objectType,
      numObjects,
      message,
      image,
    });
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title />
      <Select
        name="To Location"
        options={["Location 1", "Location 2", "Location 3", "Other"]}
        onChange={handleToLocationChange}
      />
      {showToLocationInput && (
        <Input
          name="Other Location"
          type="text"
          placeholder="Enter To Location"
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
      <TextArea
        name="message"
        rows={10}
        placeholder="Enter Message"
        onChange={handleMessageChange}
      />
      <label>
        Choose an image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <Button type="submit" value={isSending ? "Sending..." : "Send"} />
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

function Title() {
  return <h1>Daily Worksheets</h1>;
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
