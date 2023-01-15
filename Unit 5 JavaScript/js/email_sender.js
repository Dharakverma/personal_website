// Global variables for form element and input fields
emailElement = document.getElementById("email_block");
userName = emailElement.elements.name;
userMessage = emailElement.elements.message;
userEmail = emailElement.elements.email;

// validateInputs() will ensure none of the required email elements are blank or null
function validateInputs() {
    // Do not loop through formInputs, as the last input is the submit button
    // Instead, check relevant inputs manually
    if (!userName.value || !userEmail.value || !userMessage.value) {
        return false;
    }

    return true;
};

// sendEmail will send an email with relevant user inputs
function sendEmail(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Input value error handling
    if (!validateInputs()) {
        alert('Please fill out all fields');
        return;
    }

    // Use the EmailJS library to send an email with the input values as the sender's name, email address, and message
    // Do not modify the service ID or template ID unless changed in EmailJS as well
    emailjs.send("service_72b93d6", "template_rbo6ytf", {
        from_name: userName.value,
        to_name: "Dharak Verma",
        message: userMessage.value,
        reply_to: userEmail.value,
    }).then(function (response) { // Notify user of successful transmission
        alert("Email Sent");
    }, function (error) { // Notify user of failure and error code
        alert("Failed to Send Email. Error " + error);
    });
};

// Tie event listener to email form element to listen for the event submission and call sendEmail()
emailElement.addEventListener('submit', sendEmail);
