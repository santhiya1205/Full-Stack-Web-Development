// EventRegistrationInterface.jsx

class EventRegistrationInterface {
  constructor() {
    this.registrationFee = 1000;
  }

  getParticipantDetails() {
    alert("Welcome to Event Registration 🎉");

    this.name = prompt("Enter Participant Name:");
    if (!this.name) {
      alert("Participant name is required!");
      return false;
    }

    this.email = prompt("Enter Email ID:");
    if (!this.email) {
      alert("Email ID is required!");
      return false;
    }

    this.eventName = prompt("Enter Event Name:");
    if (!this.eventName) {
      alert("Event name is required!");
      return false;
    }

    this.tickets = prompt("Enter Number of Tickets:");
    if (!this.tickets || isNaN(this.tickets)) {
      alert("Invalid ticket count!");
      return false;
    }

    return true;
  }

  calculateAmount() {
    this.totalAmount = this.tickets * this.registrationFee;
  }

  confirmRegistration() {
    return confirm(
      "Please Confirm Registration Details:\n\n" +
      "Name: " + this.name + "\n" +
      "Email: " + this.email + "\n" +
      "Event: " + this.eventName + "\n" +
      "Tickets: " + this.tickets + "\n" +
      "Total Amount: ₹" + this.totalAmount + "\n\n" +
      "Do you want to confirm registration?"
    );
  }

  showResult(isConfirmed) {
    if (isConfirmed) {
      alert(
        "Registration Successful ✅\n\n" +
        "Thank you, " + this.name + "!\n" +
        "You are registered for " + this.eventName + ".\n" +
        "Amount Paid: ₹" + this.totalAmount
      );
    } else {
      alert("Registration Cancelled ❌");
    }
  }
}

export default EventRegistrationInterface;
