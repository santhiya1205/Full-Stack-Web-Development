import React, { useState } from "react";

function OnlineWorkshop() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    mode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.workshop === "" ||
      formData.mode === ""
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // Confirmation dialog
    const confirmRegister = confirm(
      `Confirm Registration?\n\nName: ${formData.name}\nWorkshop: ${formData.workshop}`
    );

    if (confirmRegister) {
      alert("✅ Registration Successful!");
    } else {
      alert("❌ Registration Cancelled");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🎓 Online Workshop Registration</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <label>Workshop Topic:</label>
        <select
          name="workshop"
          value={formData.workshop}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="React Basics">React Basics</option>
          <option value="JavaScript Advanced">JavaScript Advanced</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
        <br /><br />

        <label>Mode:</label>
        <input
          type="radio"
          name="mode"
          value="Online"
          onChange={handleChange}
        /> Online
        <input
          type="radio"
          name="mode"
          value="Offline"
          onChange={handleChange}
        /> Offline
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>👀 Live Preview</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Workshop:</strong> {formData.workshop}</p>
      <p><strong>Mode:</strong> {formData.mode}</p>
    </div>
  );
}

export default OnlineWorkshop;
