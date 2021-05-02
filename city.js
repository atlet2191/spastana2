var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slider = document.getElementsByClassName("mySlader");
    var dots = document.getElementsByClassName("dot");

    if (n > slider.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slider.length
    }

    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; 1 < bots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}