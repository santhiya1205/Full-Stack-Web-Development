import React, { useState } from "react";

const StudentManagement = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const students = [
    { id: 1, name: "Arun", department: "Computer Science", year: "3rd Year" },
    { id: 2, name: "Priya", department: "Information Technology", year: "2nd Year" },
    { id: 3, name: "Karthik", department: "Electronics", year: "4th Year" },
  ];

  const renderContent = () => {
    if (activePage === "dashboard") {
      return (
        <div>
          <h2>Dashboard</h2>
          <p>Total Students: {students.length}</p>
        </div>
      );
    }

    if (activePage === "students") {
      return (
        <div>
          <h2>Student List</h2>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (activePage === "about") {
      return (
        <div>
          <h2>About</h2>
          <p>This is a simple Student Management Dashboard built using React.</p>
        </div>
      );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav
        style={{
          width: "200px",
          background: "#2c3e50",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Menu</h3>
        <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
        <br /><br />
        <button onClick={() => setActivePage("students")}>Students</button>
        <br /><br />
        <button onClick={() => setActivePage("about")}>About</button>
      </nav>

      {/* Content */}
      <main style={{ padding: "20px", flex: 1 }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default StudentManagement;
