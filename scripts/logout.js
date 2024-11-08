// Select the logout link
const logoutLink = document.getElementById("logout");

// Add a click event listener to show a confirmation dialog
logoutLink.addEventListener("click", function (event) {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (!confirmLogout) {
        event.preventDefault(); // Prevent logout if canceled
    }
});
