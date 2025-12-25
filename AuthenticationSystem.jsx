import React, { Component } from "react";

class AuthenticationSystem extends Component {
  login = () => {
    const username = prompt("Enter Username:");
    const password = prompt("Enter Password:");

    // Simple hardcoded credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (!username || !password) {
      alert("❌ Username or Password cannot be empty!");
      return;
    }

    if (username === validUsername && password === validPassword) {
      const confirmLogin = confirm("✅ Login Successful! Do you want to continue?");
      if (confirmLogin) {
        alert("🎉 Welcome, Admin!");
      } else {
        alert("👋 Login Cancelled");
      }
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Basic Authentication System</h2>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default AuthenticationSystem;
