// Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
// Author: Unknown
// Access Date: 01/06/2023

// Initialize the slide index
let slideIndex = 1;

// Display the first slide
displaySlides(slideIndex); 

// Function to go to the next or previous slide
// depending on the value of n (1 for next, -1 for previous)
function advanceSlides(n) {
  displaySlides(slideIndex += n);
}

// Function to go to a specific slide
// based on the value of n (1 for first slide, 2 for second slide, etc.)
function currentSlide(n) {
  displaySlides(slideIndex = n);
}

// Function to display a specific slide
function displaySlides(n) {
  // Get the slide elements
  let slides = document.getElementsByClassName("mySlides");
  // Get the dot elements
  let dots = document.getElementsByClassName("dot");
  
  // If the requested slide index is greater than the total number of slides
  // set the slide index to 1 (first slide)
  if (n > slides.length) { slideIndex = 1 }
  // If the requested slide index is less than 1
  // set the slide index to the total number of slides
  if (n < 1) { slideIndex = slides.length }

  // Loop through all the slides
  for (let i = 0; i < slides.length; i++) {
    // Hide all the slides
    slides[i].style.display = "none";
  }

  // Loop through all the dots
  for (let i = 0; i < dots.length; i++) {
    // Remove the "active" class from all the dots
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the requested slide
  slides[slideIndex - 1].style.display = "block";
  // Add the "active" class to the dot for the requested slide
  dots[slideIndex - 1].className += " active";
}
