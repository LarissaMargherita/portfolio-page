//Swiper
// Swiper-Konfiguration für das Home-Slider
var homeSliderElement = document.querySelector(".home");

if (homeSliderElement) {
    var swiper = new Swiper(homeSliderElement, {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

