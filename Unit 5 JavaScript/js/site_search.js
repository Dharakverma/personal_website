// Object to store all search results, hyperlinks to redirect user, and relevant keywords to display search result(s)
const pages = [
    {
        title: "Embedded Architecture",
        url: "embedded_projects/vehicle_architecture.html",
        content: "2020 - present competition vehicle embedded systems architecture, design decisions behind it, and details on each component.",
        keywords: ["embedded", "architecture", "ECU", "electronic control unit", "STM", "ARM", "microcontroller", "MCU", "design", "decisions"]
    },
    {
        title: "Controls Architecture",
        url: "controls_projects/controls_architecture.html",
        content: "2022 - 2023 simulink-based vehicle control system architecture, design decisions behind it, and details on each component.",
        keywords: ["controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design"]
    },
    {
        title: "Communications Manager",
        url: "embedded_projects/work_in_progress.html",
        content: "Communications layer on top of pre-existing hardware abstraction layer (HAL), used to modify and fix any shortcomings in the HAL and allow for extensive unit testing.",
        keywords: ["C", "Python", "testing", "unit", "communications", "CAN", "I2C", "UART", "SPI", "STM"]
    },
    {
        title: "Torque Path Controller",
        url: "embedded_projects/work_in_progress.html",
        content: "Torque controller component inside the Simulink based control system.",
        keywords: ["torque", "controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design", "controller", "motors"]
    },
    {
        title: "Battery Monitor",
        url: "embedded_projects/work_in_progress.html",
        content: "Battery monitor component inside the Simulink based control system.",
        keywords: ["controls", "architecture", "simulink", "matlab", "block design", "testing", "test", "white box", "black box", "decisions", "design", "BMS", "battery pack", "management"]
    },
    {
        title: "Scheduler-From-Scratch",
        url: "embedded_projects/work_in_progress.html",
        content: "In-house designed and developed operating system scheduler, responsible for task management and pre-emption for all vehicle tasks.",
        keywords: ["C", "STM", "designed", "developed", "operating system", "OS", "RTOS", "scheduler", "tasks"]
    }
];

/**
 * searchPages will search through the pages array and find matching results based on any relevant keyword or part of a keyword
 * @param {String} searchQuery - The search query
 * @returns {Array} - All matching website pages
 */
 function searchPages(searchQuery) {
    // Create a regular expression from the search query
    const regex = new RegExp(searchQuery, 'i');
    // Use the Array.prototype.filter() method to find pages that match the search query
    return pages.filter(page => regex.test(page.title) || regex.test(page.content) || page.keywords.some(keyword => regex.test(keyword)));
}

/**
 * results will display the search results
 * @param {Array} results - All matching website pages
 */
function displayResults(results) {
    // Capture the results container
    const resultsContainer = document.getElementById("resultsContainer");
    // Clear previous search results
    resultsContainer.innerHTML = "";
    // Iterate over results array and add each result to search results container
    results.forEach(result => {
        // Create new link element
        const link = document.createElement('a');
        link.href = result.url;
        link.innerText = result.title;
        // Append link to search results container
        resultsContainer.appendChild(link);
        // Create element to display the content of the result
        const content = document.createElement('p');
        content.innerText = result.content;
        // Append searc]h result information/content to search results container
        resultsContainer.appendChild(content);
    });
}

/**
 * handleSearch will handle the search form submission on user input
 */
function handleSearch() {
    // Capture the input field
    const input = document.getElementById("searchInput");
    // Store the search query
    const searchQuery = input.value;
    // Use searchPages() to find matching results
    const results = searchPages(searchQuery);
    // Use displayResults() to display the matching results
    displayResults(results);
}
