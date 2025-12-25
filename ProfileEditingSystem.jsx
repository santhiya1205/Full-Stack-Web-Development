import React from "react";

class ProfileEditingSystem extends React.Component {
  editProfile = () => {
    let name = prompt("Enter your name:");
    if (!name || name.trim() === "") {
      alert("Name cannot be empty!");
      return;
    }

    let email = prompt("Enter your email:");
    if (!email || !email.includes("@")) {
      alert("Invalid email address!");
      return;
    }

    let age = prompt("Enter your age:");
    if (!age || isNaN(age) || age <= 0) {
      alert("Please enter a valid age!");
      return;
    }

    let confirmUpdate = confirm(
      `Please confirm your details:\n\nName: ${name}\nEmail: ${email}\nAge: ${age}`
    );

    if (confirmUpdate) {
      alert("Profile updated successfully!");
    } else {
      alert("Profile update cancelled.");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>User Profile Editing System</h2>
        <button onClick={this.editProfile}>
          Edit Profile
        </button>
      </div>
    );
  }
}

export default ProfileEditingSystem;
