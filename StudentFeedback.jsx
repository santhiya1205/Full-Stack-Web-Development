import React, { useState } from "react";

function StudentFeedback() {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const submitFeedback = () => {
    if (rating === "" || comments.trim() === "") {
      alert("Please provide both rating and comments!");
      return;
    }

    const confirmation = confirm(
      `Submit Feedback?\nRating: ${rating}\nComments: ${comments}`
    );

    if (confirmation) {
      alert("Thank you! Your feedback has been submitted successfully.");
      setRating("");
      setComments("");
    } else {
      alert("Feedback submission cancelled.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Feedback System</h2>

      <label>Rate the Course:</label>
      <br />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">-- Select Rating --</option>
        <option value="5">Excellent ⭐⭐⭐⭐⭐</option>
        <option value="4">Very Good ⭐⭐⭐⭐</option>
        <option value="3">Good ⭐⭐⭐</option>
        <option value="2">Average ⭐⭐</option>
        <option value="1">Poor ⭐</option>
      </select>

      <br /><br />

      <label>Comments:</label>
      <br />
      <textarea
        rows="4"
        cols="40"
        placeholder="Enter your feedback here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      <br /><br />

      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default StudentFeedback;
