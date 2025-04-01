document.addEventListener("scroll", function () {
    let preElement = document.querySelector("pre");
    let scrollPosition = window.scrollY;
    
    // Increase font size based on scroll position
    let newSize = 16 + scrollPosition / 20; // Base size + dynamic increase
    preElement.style.fontSize = newSize + "px";
    
    // Change font family dynamically
    let fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
    let fontIndex = Math.floor(scrollPosition / 100) % fonts.length;
    preElement.style.fontFamily = fonts[fontIndex];
});