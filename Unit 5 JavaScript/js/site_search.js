// Array to store all search results, hyperlinks to redirect user, and relevant keywords to display search result(s)
const data = [
    {
        title: "Embedded Architecture",
        url: "embedded_projects/vehicle_architecture.html",
        description: "2020 - present competition vehicle embedded systems architecture, design decisions behind it, and details on each component.",
        keywords: ["embedded", "architecture", "ECU", "electronic control unit", "STM", "ARM", "microcontroller", "MCU", "design", "decisions"]
    },
    {
        title: "Controls Architecture",
        url: "controls_projects/controls_architecture.html",
        description: "2022 - 2023 simulink-based vehicle control system architecture, design decisions behind it, and details on each component.",
        keywords: ["controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design"]
    },
    {
        title: "Communications Manager",
        url: "embedded_projects/work_in_progress.html",
        description: "Communications layer on top of pre-existing hardware abstraction layer (HAL), used to modify and fix any shortcomings in the HAL and allow for extensive unit testing.",
        keywords: ["C", "Python", "testing", "unit", "communications", "CAN", "I2C", "UART", "SPI", "STM"]
    },
    {
        title: "Torque Path Controller",
        url: "embedded_projects/work_in_progress.html",
        description: "Torque controller component inside the Simulink based control system.",
        keywords: ["torque", "controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design", "controller", "motors"]
    },
    {
        title: "Battery Monitor",
        url: "embedded_projects/work_in_progress.html",
        description: "Battery monitor component inside the Simulink based control system.",
        keywords: ["controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design", "BMS", "battery pack", "management"]
    },
    {
        title: "Scheduler-From-Scratch",
        url: "embedded_projects/work_in_progress.html",
        description: "In-house designed and developed operating system scheduler, responsible for task management and pre-emption for all vehicle tasks.",
        keywords: ["C", "STM", "designed", "developed", "operating system", "OS", "RTOS", "scheduler", "tasks"]
    }
];

// searchForResults will search through the pages array and find matching results based on any relevant keyword or part of a keyword
function searchForResults(userInput) {
    // Create a regular expression from the input searchQuery
    // Make all input text lowercase for accuracy
    regexValue = new RegExp(userInput, 'i');
    // Find and return all webpages that match the search result
    // Search through the title, description, and keywords
    // Allow for partial word matches to be returned as valid results
    return data.filter(page => regexValue.test(page.title)
        || regexValue.test(page.description)
        || page.keywords.some(keyword => regexValue.test(keyword)));
}

// displayResults will display the search results
function displayResults(results) {
    // Handle results container
    resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    // If no search results are found
    if (results == "") {
        // Create new display elements
        link = document.createElement('a');
        description = document.createElement('p');

        // Add relevant webpage redirects to the search result link
        link.href = "";
        link.innerText = "No matching search results found.";

        // Append results to search results container on webpage
        resultsContainer.appendChild(link);
        description.innerText = "Try something related a Embedded Software or Controls project, such as 'ECU', 'Simulink', or 'C'.";
        resultsContainer.appendChild(description);
    } else {
        // Otherwise add each result to the results container
        results.forEach(result => {
            // Have to repeat the element creation code as we want a new element for each search result
            link = document.createElement('a');
            description = document.createElement('p');

            link.href = result.url;
            link.innerText = result.title;

            resultsContainer.appendChild(link);
            description.innerText = result.description;
            resultsContainer.appendChild(description);
        });
    }
}

// searchFormHandler will handle the search form submission on user input
function searchFormHandler() {
    // Capture the input field
    input = document.getElementById("searchInput");
    // Store the search query
    searchQuery = input.value;

    displayResults(searchForResults(searchQuery));
}
