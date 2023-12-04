// Initialize the slide index
var slide_index = 0;

// Call the showSlides function to start the slideshow
showSlides();

/**********************************************************************************
 * @brief  Function to display slides in a slideshow and update navigation dots.  *
 *                                                                                *
 * @details This function hides all slides initially, then sequentially displays  *
 *          each slide while updating the corresponding navigation dots. It       *
 *          utilizes a timer (setTimeout) to create an automatic slideshow with a *
 *          5-second interval between slides.                                     *
 **********************************************************************************/
function showSlides() {
    // Get references to the slides and navigation dots
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment the slide index and reset to 1 if it exceeds the total number of slides
    slide_index++;
    if (slide_index > slides.length) {
        slide_index = 1;
    }

    // Update the active state of navigation dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }  

    // Display the current slide and mark the corresponding dot as active
    slides[slide_index-1].style.display = "block";  
    dots[slide_index-1].className += " active";

    // Set a timer to call the showSlides function after a 5-second delay
    setTimeout(showSlides, 5000);
}
