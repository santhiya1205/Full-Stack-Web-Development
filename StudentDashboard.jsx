import React from "react";
import { Link, Routes, Route } from "react-router-dom";

// Pages
function Home() {
  return <h2>Welcome to Student Dashboard</h2>;
}

function Profile() {
  return <h2>Student Profile Page</h2>;
}

function Marks() {
  return <h2>Student Marks Page</h2>;
}

function Attendance() {
  return <h2>Student Attendance Page</h2>;
}

function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/marks">Marks</Link> |{" "}
        <Link to="/attendance">Attendance</Link>
      </nav>

      <hr />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
}

export default StudentDashboard;
