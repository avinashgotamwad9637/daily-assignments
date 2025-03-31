document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulate successful login for testing purposes
        alert("Login Successful!");
        
        // Redirect to a new page after a short delay
        setTimeout(() => {
            window.location.href = "On_click_Open.html";
        }, 1000);
    });
});
