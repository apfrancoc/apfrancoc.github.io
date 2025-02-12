document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Load dark mode state from localStorage
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark");
    }

    // Toggle dark mode
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save user preference
        localStorage.setItem("dark-mode", document.body.classList.contains("dark"));
    });
});
