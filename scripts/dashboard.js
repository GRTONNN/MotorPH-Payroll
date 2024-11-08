// Select the Clock In button
const clockInButton = document.getElementById("clockInButton");

// Add a click event listener to the button
clockInButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Update the button text and disable it
    clockInButton.textContent = "Clocked In";
    clockInButton.style.backgroundColor = "grey";
    clockInButton.style.cursor = "not-allowed";
    clockInButton.removeAttribute("href"); // Remove link functionality
});
