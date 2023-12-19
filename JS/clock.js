/**********************************************************************************
 * @brief  Function to update and display the current date and time.              *
 *                                                                                *
 * @details This function retrieves the current date and time using the Date       *
 *          object, formats the information, and updates the content of the        *
 *          element with the class 'clock' on the web page. Additionally, the      *
 *          function utilizes the 'addLeadingZero' function to ensure two-digit    *
 *          formatting for hours, minutes, and seconds.                            *
 **********************************************************************************/
function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dayMonth = date.getDate();
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];
    var clock = document.querySelector(".clock");
    clock.innerHTML = week[day] + ", " + dayMonth + " " + months[month] + " " + year + "<br>" +
        addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
}

/**********************************************************************************
 * @brief  Function to add a leading zero to a number if it is less than 10.       *
 *                                                                                *
 * @param  {number} number - The number to be formatted.                           *
 * @return {string} The formatted number with a leading zero if necessary.         *
 **********************************************************************************/
function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

// Check if the navigation links have a specified height
var navlinks = document.querySelector(".nav-links");

// If the navigation links have a height, hide the clock
if (navlinks.style.height !== "") {
    var clock = document.querySelector(".clock");
    clock.style.display = "none";
}

// Set up an interval to update the clock every second
setInterval(updateClock, 1000);

// Initial call to update the clock when the page loads
updateClock();
