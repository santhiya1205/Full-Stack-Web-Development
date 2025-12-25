import React from "react";

class NotificationSystem extends React.Component {
  showSuccessNotification = () => {
    alert("✅ Success Notification: Your data was saved successfully!");
  };

  showWarningNotification = () => {
    alert("⚠️ Warning Notification: Your session will expire soon!");
  };

  showErrorNotification = () => {
    alert("❌ Error Notification: Failed to load dashboard data!");
  };

  showConfirmationNotification = () => {
    const result = confirm("🔔 Do you want to clear all notifications?");
    if (result) {
      alert("All notifications cleared!");
    } else {
      alert("Action cancelled.");
    }
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Dashboard Notification System</h2>

        <button onClick={this.showSuccessNotification}>
          Show Success Notification
        </button>
        <br /><br />

        <button onClick={this.showWarningNotification}>
          Show Warning Notification
        </button>
        <br /><br />

        <button onClick={this.showErrorNotification}>
          Show Error Notification
        </button>
        <br /><br />

        <button onClick={this.showConfirmationNotification}>
          Clear Notifications
        </button>
      </div>
    );
  }
}

export default NotificationSystem;
