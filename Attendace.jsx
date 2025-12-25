import { useState } from "react";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", present: false },
    { id: 2, name: "Divya", present: false },
    { id: 3, name: "Karthik", present: false },
    { id: 4, name: "Meena", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div>
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td style={{ color: student.present ? "green" : "red" }}>
                {student.present ? "Present" : "Absent"}
              </td>
              <td>
                <button onClick={() => toggleAttendance(student.id)}>
                  Mark {student.present ? "Absent" : "Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
