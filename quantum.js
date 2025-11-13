document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    const options = { year: "numeric", month: "long" }; // Ex : Mars 2025
    const currentDate = new Date().toLocaleDateString("fr-FR", options);
    dateElement.textContent = currentDate;
});
