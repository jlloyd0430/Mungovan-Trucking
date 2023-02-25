import React from "react";
import "./App.css";
import Verizon from "./images/verizon.png";
import Wpi from "./images/wpi.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 style={{ textAlign: "center" }}>Daily Worksheet</h1>
      <Form />
      {/* <Icons /> */}
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <h1>Mungovan-Trucking</h1>
    </nav>
  );
}

function Form() {
  return (
    <form action="https://formspree.io/f/mvonajop" method="post">
      <Input name="name" type="text" placeholder="Enter your Name..." />
      <Input name="email" type="email" placeholder="Enter your Email..." />
      <Select
        name="Job Type"
        options={["Cleanout", "Delivery", "Pickup", "Internal-move"]}
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

function Select({ name, options }) {
  return (
    <select name={name} style={{ padding: "0.5rem", borderRadius: "16px" }}>
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
      <Verizon />
      <Wpi />
    </div>
  );
}

export default App;
