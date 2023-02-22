// Array to store all search results, hyperlinks to redirect user, and relevant keywords to display search result(s)
const data = [
    {
        title: "Embedded Architecture",
        url: "embedded_projects/vehicle_architecture.html",
        description: "2020 - present competition vehicle embedded systems architecture, design decisions behind it, and details on each component.",
    },
    {
        title: "Controls Architecture",
        url: "controls_projects/controls_architecture.html",
        description: "2022 - 2023 simulink-based vehicle control system architecture, design decisions behind it, and details on each component.",
    }
    // NOTE: Template for when the remaining projects are complete!
    // {
    //     title: "Communications Manager",
    //     url: "embedded_projects/work_in_progress.html",
    //     description: "Communications layer on top of pre-existing hardware abstraction layer (HAL), used to modify and fix any shortcomings in the HAL and allow for extensive unit testing.",
    // },
    // {
    //     title: "Torque Path Controller",
    //     url: "embedded_projects/work_in_progress.html",
    //     description: "Torque controller component inside the Simulink based control system.",
    // },
    // {
    //     title: "Battery Monitor",
    //     url: "embedded_projects/work_in_progress.html",
    //     description: "Battery monitor component inside the Simulink based control system.",
    // },
    // {
    //     title: "Scheduler-From-Scratch",
    //     url: "embedded_projects/work_in_progress.html",
    //     description: "In-house designed and developed operating system scheduler, responsible for task management and pre-emption for all vehicle tasks.",
    // }
];

// Array to store the project pages that should be searched for matching user input
const pages = [
    "embedded_projects/vehicle_architecture.html",
    "controls_projects/controls_architecture.html"
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
        description.innerText = "Try something related to a Embedded Software or Controls project, such as 'ECU', 'Simulink', or 'C'.";
        resultsContainer.appendChild(description);
    } else {
        // Otherwise add each result to the results container
        // result is a url to the relevant project page
        results.forEach(result => {
            // Have to repeat the element creation code as we want a new element for each search result
            link = document.createElement('a');
            description = document.createElement('p');

            // Result already contains url
            link.href = result;

            // Must get the remaining properties for the search result container
            // by searching data array and referencing returned object
            projectInfo = data.find(obj => obj.url === result);

            link.innerText = projectInfo.title;
            resultsContainer.appendChild(link);
            description.innerText = projectInfo.description;
            resultsContainer.appendChild(description);
        });
    }
}

// searchFormHandler will handle the search form submission on user input
// NOTE: must be async function in order to get results array properly
async function searchFormHandler(event) {
    // Prevent refresh on search form submission
    event.preventDefault();
    // Store the search query
    searchQuery = searchElement.search_input.value;

    // Must wait for results array in searchPages to finish population, as it a async job
    results = await searchPages(searchQuery);
    displayResults(results);
}

async function searchPages(input) {
    // Create a regular expression from the input searchQuery
    // Make all input text lowercase for accuracy
    regexValue = new RegExp(input, 'i');
    // Find and return all webpages that match the search result
    // Search through the entire HTML webpage
    // Declare results as a const to keep accessible through program 
    const results = [];

    // Iterate through each url from data array and find any matching words from the relevant html page
    for(d of data) {
        // Make a GET request to each URL in the data array
        // NOTE: GET is an asynchronous method, so we must wait on the computation before returning the results array
        page = await $.get(d.url);

        // Search the HTML page for matching words
        if (page.match(regexValue)) {
            results.push(d.url);
        }
    }

    return results;
}

// Add an event listener for the submit button
// This will ensure the contents of the entire page are loaded before we 
// store the search_bar element
document.addEventListener("DOMContentLoaded", function(){
    searchElement = document.getElementById("search_bar");
    searchElement.addEventListener('submit', searchFormHandler);
});
