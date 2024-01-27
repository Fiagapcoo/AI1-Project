/**********************************************************************************
 * @brief  Wait for the DOM to be fully loaded before executing the script.        *
 *                                                                                 *
 * @details This event listener handles the initialization of navigation-related   *
 *          functionality once the DOM content has been fully loaded.              *
 *                                                                                 *
 * @param {Event} 'DOMContentLoaded' - The event triggered when the DOM is ready.  *
 **********************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
  var navCheck = document.getElementById('nav-check');
  var navLinks = document.querySelector('.nav-links');

  /**********************************************************************************
   * @brief  Event listener for handling dropdown toggles in the navigation menu.   *
   *                                                                                *
   * @details This event listener checks if the clicked element has the             *
   *          'dropdown-toggle' class and toggles the display of the corresponding  *
   *          dropdown content accordingly.                                         *
   *                                                                                *
   * @param {Event} e - The event object representing the click event.              *
   **********************************************************************************/
  navLinks.addEventListener('click', function (e) {
    // Check if screen width is less than or equal to 768 pixels (considered as mobile resolution)
    if (window.innerWidth <= 768) {
      if (e.target.classList.contains('dropdown-toggle')) {
        var dropdownContent = e.target.nextElementSibling;
        
        // Toggle the display of the dropdown content
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      }
    }
  });

  /***********************************************************************************
   * @brief  Event listener for handling changes in the state of the navigation      *
   *         checkbox, typically used for mobile navigation.                         *
   *                                                                                 *
   * @details This event listener adjusts the height and overflow properties of the  *
   *          navigation links container based on whether the checkbox is checked    *
   *          or not, enabling or disabling vertical scrolling accordingly.          *
   **********************************************************************************/
  navCheck.addEventListener('change', function () {
    if (navCheck.checked) {
      // Expand the navigation links container and enable vertical scrolling
      navLinks.style.height = 'calc(100vh - 50px)';
      navLinks.style.overflowY = 'auto';
    } else {
      // Collapse the navigation links container and hide vertical scrolling
      navLinks.style.height = '0px';
      navLinks.style.overflowY = 'hidden';
    }
  });
});
