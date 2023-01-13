// globals for user forms and html elements
emailForm = document.getElementById('email-form');
formInputs = emailForm.elements;
nameInput = formInputs.name;
emailInput = formInputs.email;
messageInput = formInputs.message;

// Define a function to validate the input values
const validateInputs = (inputs) => {
    // Create an array to store the input values
    const inputValues = [];

    // Iterate over the input elements
    for (const input of inputs) {
        // If the value of the input is an empty string after being trimmed, return false
        if (input.value.trim() === '') {
            return false;
        }
        // Otherwise, add the value to the array of input values
        inputValues.push(input.value.trim());
    }
    // Return the array of input values if all of the inputs are present
    return inputValues;
};

// Define a function to send the email
const sendEmail = (event) => {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Validate the input values
    const inputValues = validate
    Inputs(formInputs);

    // If the input values are not valid, show an error message and return
    if (!inputValues) {
        alert('Please fill out all fields');
        return;
    }

    // Destructure the input values into separate variables
    const [name, email, message] = inputValues;

    // Use the EmailJS library to send an email with the input values as the sender's name, email address, and message
    Email.send({
        SecureToken: 'your-secure-token',
        To: 'your@email.com',
        From: email,
        Subject: 'Message from ' + name,
        Body: message
    }).then(() => {
        // Show a success message if the email was sent successfully
        alert('Your message was sent successfully');
    });
};

// Add an event listener to the form element that listens for the submit event and calls the sendEmail function
emailForm.addEventListener('submit', sendEmail);
