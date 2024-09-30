document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        // EmailJS send function
        emailjs.send("your_service_id", "your_template_id", {
            name: name,
            email: email,
            message: message,
        })
        .then(function(response) {
            alert(`Thank you for your message, ${name}!`);
            document.getElementById("contact-form").reset(); // Reset the form
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
