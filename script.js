let angle = 0; // Initialize rotation angle

function rotateLine() {
    let line = document.getElementById("line");
    if (line) {
        angle += 2; // Increase angle by 2 degrees
        line.style.transform = `rotate(${angle}deg)`; // Apply rotation
    }
}

// Ensure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    setInterval(rotateLine, 20);
});