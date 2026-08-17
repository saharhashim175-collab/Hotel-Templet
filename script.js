const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your booking request has been received!");

});