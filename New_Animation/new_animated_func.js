const btn = document.getElementById("changeBtn");
const resetBtn = document.getElementById("resetBtn");
const childBox = document.getElementById("childBox");

btn.addEventListener("click", () => {
    childBox.textContent = "Welcome to the PreDrag System !";
    triggerAnimation();

    // Redirect after animation duration (1s)
    setTimeout(() => {
        window.location.href = "https://predragsystem.in/";
    }, 1000); // Match the animation duration
});

resetBtn.addEventListener("click", () => {
    childBox.textContent = "Predrag Academy";
    triggerAnimation();
});

function triggerAnimation() {
    childBox.style.animation = "none";
    void childBox.offsetWidth; // Restart animation
    childBox.style.animation = "fadeSlide 1s ease-out forwards";
}
