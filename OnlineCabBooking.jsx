// OnlineCabBooking.jsx

class OnlineCabBooking {
  constructor() {
    this.ratePerKm = 15;
  }

  getBookingDetails() {
    alert("Welcome to Online Cab Booking 🚕");

    this.customerName = prompt("Enter Customer Name:");
    if (!this.customerName) {
      alert("Customer name is required!");
      return false;
    }

    this.pickup = prompt("Enter Pickup Location:");
    if (!this.pickup) {
      alert("Pickup location is required!");
      return false;
    }

    this.drop = prompt("Enter Drop Location:");
    if (!this.drop) {
      alert("Drop location is required!");
      return false;
    }

    this.distance = prompt("Enter Distance in KM:");
    if (!this.distance || isNaN(this.distance)) {
      alert("Invalid distance!");
      return false;
    }

    return true;
  }

  calculateFare() {
    this.totalFare = this.distance * this.ratePerKm;
  }

  confirmBooking() {
    return confirm(
      "Confirm Cab Booking Details:\n\n" +
      "Customer: " + this.customerName + "\n" +
      "Pickup: " + this.pickup + "\n" +
      "Drop: " + this.drop + "\n" +
      "Distance: " + this.distance + " KM\n" +
      "Total Fare: ₹" + this.totalFare + "\n\n" +
      "Do you want to confirm booking?"
    );
  }

  showResult(isConfirmed) {
    if (isConfirmed) {
      alert(
        "Cab Booked Successfully ✅\n\n" +
        "Customer: " + this.customerName + "\n" +
        "Route: " + this.pickup + " → " + this.drop + "\n" +
        "Amount Paid: ₹" + this.totalFare
      );
    } else {
      alert("Cab Booking Cancelled ❌");
    }
  }
}

export default OnlineCabBooking;
