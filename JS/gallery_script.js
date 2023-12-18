/**********************************************************************************
 * @brief  Functionality for handling the submission of a form.                   *
 *                                                                                *
 * @details This script manages form submission, preventing the default action,   *
 *          verifying all required fields are filled, and displaying an alert if  *
 *          any field is empty. It also saves the form state to local storage,     *
 *          maintaining a history of form submissions.                             *
 *                                                                                *
 * @param  {object} event - The event object representing the form submission.    *
 **********************************************************************************/

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.getElementById("span");

// Attach click event listeners to each image in the gallery.
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Skip the first image (index 0) as it may be a placeholder.
    if (index === 0) {
      return;
    }
    // Open a modal with the clicked image.
    openModal(`../assets/imgs/gallery/${index}.jpg`);
  });
});

// Add a click event listener to the close button in the modal.
close.addEventListener("click", () => {
  console.log("clicked");
  // Hide the modal when the close button is clicked.
  wrapper.style.display = "none";
});

/*****************************************************************************************
*  @details      element to "flex" and sets the source of the image element (imgWrapper).*
*  @param  {string} pic - The path to the image to be displayed in the modal.            *
*****************************************************************************************/
function openModal(pic) {
  // Display the modal and set the image source.
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  wrapper.style.cursor = "zoom-in"; // Set the initial cursor style

  // Add a click event listener to the image for zooming
  imgWrapper.addEventListener("click", zoomImage);
}

/*****************************************************************************************
 * @brief  Function to handle zooming in and out on an image.                            *
 * @detail This function toggles between zoomed-in and zoomed-out states.                *
 * *************************************************************************************/
function zoomImage() {
  // Toggle between zoomed-in and zoomed-out states
  if (wrapper.style.cursor === "zoom-in") {
    // Zoom in
    imgWrapper.style.transform = "scale(1.5)"; // Adjust the scale factor as needed
    wrapper.style.cursor = "zoom-out";
  } else {
    // Zoom out
    imgWrapper.style.transform = "scale(1)";
    wrapper.style.cursor = "zoom-in";
  }
}
