
document.addEventListener("DOMContentLoaded", function() {
    var welcomeContainer = document.getElementById("welcomeContainer");

    // Sayfa yüklendiğinde animasyonu başlat
    setTimeout(function() {
        welcomeContainer.classList.add("show");
    }, 500);
});
