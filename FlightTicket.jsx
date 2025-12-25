// FlightTicket.jsx

class FlightTicket {
  constructor() {
    this.pricePerSeat = 5500;
  }

  getPassengerDetails() {
    alert("Welcome to Flight Ticket Booking ✈️");

    this.name = prompt("Enter Passenger Name:");
    if (!this.name) {
      alert("Passenger name is required!");
      return false;
    }

    this.fromCity = prompt("Enter Departure City:");
    if (!this.fromCity) {
      alert("Departure city is required!");
      return false;
    }

    this.toCity = prompt("Enter Destination City:");
    if (!this.toCity) {
      alert("Destination city is required!");
      return false;
    }

    this.seats = prompt("Enter Number of Seats:");
    if (!this.seats || isNaN(this.seats)) {
      alert("Invalid seat count!");
      return false;
    }

    return true;
  }

  calculateFare() {
    this.totalFare = this.seats * this.pricePerSeat;
  }

  confirmTicket() {
    return confirm(
      "Confirm Your Booking Details:\n\n" +
      "Passenger: " + this.name + "\n" +
      "From: " + this.fromCity + "\n" +
      "To: " + this.toCity + "\n" +
      "Seats: " + this.seats + "\n" +
      "Total Fare: ₹" + this.totalFare + "\n\n" +
      "Do you want to confirm booking?"
    );
  }

  showMessage(isConfirmed) {
    if (isConfirmed) {
      alert(
        "Booking Confirmed ✅\n\n" +
        "Passenger: " + this.name + "\n" +
        "Route: " + this.fromCity + " → " + this.toCity + "\n" +
        "Amount Paid: ₹" + this.totalFare
      );
    } else {
      alert("Booking Cancelled ❌");
    }
  }
}

export default FlightTicket;
