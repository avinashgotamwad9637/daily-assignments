const list = document.getElementById("animatedList");

    function triggerAnimation() {
      list.classList.remove("animate");
      // Force reflow to restart animation
      void list.offsetWidth;
      list.classList.add("animate");
    }

    // Initial trigger after page load
    setTimeout(triggerAnimation, 100);

    // Repeat every 3 seconds
    setInterval(triggerAnimation, 3000);