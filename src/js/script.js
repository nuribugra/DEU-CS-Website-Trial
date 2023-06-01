// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("announcement-slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Navbar Button (Mobile)

const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("nav");
const mainNav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".nav-item");
const dropdownBtn = document.querySelectorAll(".dropdown-btn");

let showMenu = false;

navBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        navBtn.classList.add("open");
        nav.classList.add("open");
        mainNav.classList.add("open");
        navItems.forEach((item) => item.classList.add("open"));
        dropdownBtn.forEach((item) => item.classList.add("open"));

        showMenu = true;
    } else {
        navBtn.classList.remove("open");
        nav.classList.remove("open");
        mainNav.classList.remove("open");
        navItems.forEach((item) => item.classList.remove("open"));
        dropdownBtn.forEach((item) => item.classList.remove("open"));

        showMenu = false;
    }
}



