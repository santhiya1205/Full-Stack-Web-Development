import { useState } from "react";

function TaskDashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>✨ Today’s Tasks</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: "#667eea",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No tasks yet 🌱</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: index % 2 === 0 ? "#f3f4ff" : "#eef2ff",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            >
              <span>{t.text}</span>
              <button
                onClick={() => removeTask(t.id)}
                style={{
                  border: "none",
                  background: "#ef4444",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}

      <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
        Total Tasks: <strong>{tasks.length}</strong>
      </p>
    </div>
  );
}

export default TaskDashboard;
