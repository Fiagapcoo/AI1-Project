var slide_index = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slide_index++;
    if (slide_index > slides.length) {slide_index = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }  
    slides[slide_index-1].style.display = "block";  
    dots[slide_index-1].className += " active";
    setTimeout(showSlides, 5000);
}