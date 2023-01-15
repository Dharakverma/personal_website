// ProgressBar class is a template for a progress bar object
// Even though we only have 1 progress bar in this project so far, by having a class we can easily
// create new objects and have multiple bars on the screens, if we ever wanted to track different elements.
class ProgressBar {

    // Constructor for a progress bar object
    // Add an input to constructor if you want to create multiple bars. That way, the elements will be dynamically tied. 
    constructor() {
        this.progressBar = document.getElementById("progress_bar");
        this.progress = this.progressBar.querySelector(".progress");
        this.scrollPercent = 0;
    }

    // calculateProgress() computes the scroll percentage throught the document so far based
    // based on the documents height and scroll position
    #calculateProgress() {
        // Calculate the position of the scroll bar and the total height of the document
        // Both must be constant or else they will fail to update correctly
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        // Take client height (largest window height possible) as our document
        const documentHeight = document.documentElement.clientHeight;

        // Error handling for min and infinite scroll heights
        if (documentHeight === 0) {
            this.scrollPercent = 0;
        } else {
            // Scroll height is a rational number, compute height of progress bar element and update
            this.scrollPercent = (scrollPosition / documentHeight) * 100;
            // this.progress.style.height = `${scrollPercent}%`;
            // Turn entire bar green if scroll is maxed out
            if (this.scrollPercent === 100) {
                this.progress.style.backgroundColor = "rgb(94, 255, 0)";
            }
        }
    }

    // modifyProgressBar() changes the height of this progress bar based on input barHeight
    #modifyProgressBar() {
        this.progress.style.height = `${this.scrollPercent}%`;

        // Turn entire bar green if scroll is maxed out
        if (this.scrollPercent === 100) {
            this.progress.style.backgroundColor = 'rgb(94, 255, 0)';
        }
    }

    // updateProgressBar() updates this progress bar's height 
    updateProgressBar() {
        this.#calculateProgress();
        this.#modifyProgressBar();
    }
}

// Progress bar object creation
const progress = new ProgressBar();

// Event listener for when the user scrolls up/down the webpage
// Updates our project bar object using built in method
window.addEventListener('scroll', function() {
    progress.updateProgressBar();
});
