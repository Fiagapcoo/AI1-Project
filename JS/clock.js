function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dayMonth = date.getDate();
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September",
    "October","November","December"];
    var clock = document.querySelector(".clock");
    clock.innerHTML = week[day] + ", " + dayMonth + " " + months[month] + " " + year + "<br>" + 
                      addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
}

function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}

var navlinks = document.querySelector(".nav-links");

if (navlinks.style.height !== "") {
    var clock = document.querySelector(".clock");
    clock.style.display = "none";
}

setInterval(updateClock, 1000);
updateClock();
