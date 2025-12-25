// HotelReservation.jsx

class HotelReservation {
  constructor() {
    this.pricePerRoom = 3000;
  }

  getGuestDetails() {
    alert("Welcome to Hotel Reservation System 🏨");

    this.guestName = prompt("Enter Guest Name:");
    if (!this.guestName) {
      alert("Guest name is required!");
      return false;
    }

    this.city = prompt("Enter City:");
    if (!this.city) {
      alert("City is required!");
      return false;
    }

    this.rooms = prompt("Enter Number of Rooms:");
    if (!this.rooms || isNaN(this.rooms)) {
      alert("Invalid number of rooms!");
      return false;
    }

    this.days = prompt("Enter Number of Days:");
    if (!this.days || isNaN(this.days)) {
      alert("Invalid number of days!");
      return false;
    }

    return true;
  }

  calculateBill() {
    this.totalAmount = this.rooms * this.days * this.pricePerRoom;
  }

  confirmReservation() {
    return confirm(
      "Confirm Reservation Details:\n\n" +
      "Guest Name: " + this.guestName + "\n" +
      "City: " + this.city + "\n" +
      "Rooms: " + this.rooms + "\n" +
      "Days: " + this.days + "\n" +
      "Total Amount: ₹" + this.totalAmount + "\n\n" +
      "Do you want to confirm reservation?"
    );
  }

  showResult(isConfirmed) {
    if (isConfirmed) {
      alert(
        "Reservation Successful ✅\n\n" +
        "Guest: " + this.guestName + "\n" +
        "City: " + this.city + "\n" +
        "Total Paid: ₹" + this.totalAmount
      );
    } else {
      alert("Reservation Cancelled ❌");
    }
  }
}

export default HotelReservation;
