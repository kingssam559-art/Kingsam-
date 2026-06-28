// ===========================
// KINGSAM MOBILE REPAIR JS
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // WELCOME POPUP
    // ===========================
    const popup = document.getElementById("welcomePopup");
    const closeBtn = document.getElementById("closePopup");

    // Show popup when page loads
    if (popup) {
        popup.style.display = "flex";
    }

    // Close popup
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    // ===========================
    // MOBILE MENU TOGGLE
    // ===========================
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

});
