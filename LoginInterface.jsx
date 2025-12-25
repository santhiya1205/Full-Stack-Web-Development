import React from "react";

class LoginInterface extends React.Component {
  handleLogin = () => {
    // Prompt for username
    const username = prompt("Enter your username:");

    if (!username) {
      alert("Username cannot be empty!");
      return;
    }

    // Prompt for role
    const role = prompt(
      "Enter your role (admin / user / guest):"
    );

    if (!role) {
      alert("Role is required!");
      return;
    }

    // Confirmation dialog
    const confirmLogin = confirm(
      `Confirm Login\nUsername: ${username}\nRole: ${role}`
    );

    if (!confirmLogin) {
      alert("Login cancelled.");
      return;
    }

    // Role-based redirection simulation
    if (role.toLowerCase() === "admin") {
      alert(`Welcome Admin ${username}! Redirecting to Admin Dashboard...`);
    } 
    else if (role.toLowerCase() === "user") {
      alert(`Welcome ${username}! Redirecting to User Home Page...`);
    } 
    else if (role.toLowerCase() === "guest") {
      alert(`Welcome Guest! Redirecting to Guest View...`);
    } 
    else {
      alert("Invalid role entered!");
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Login Interface</h2>
        <button onClick={this.handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LoginInterface;
