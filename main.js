//https://www.youtube.com/watch?v=qFVVCaOe6z8&t=3610s
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

//Chasing Stars - https://codepen.io/Abdelrahman-Abdullah/details/jOXxjEQ
// Get the stars and background elements
const stars = document.getElementById("stars");
const backG = document.getElementById("backG");

// Create a function to generate a single star
function generateStar(randomAngle = Math.floor(Math.random(3000) * 360)) {
  const star = document.createElement("div");
  star.classList.add("singleStar");

  // Set the star's position and size
  const left = Math.floor(Math.random() * 100);
  const top = Math.floor(Math.random() * 230);
  const size = Math.floor(Math.random() * 4);
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = (left / 100) * 100 + "%";
  star.style.top = (top / 100) * 100 + "%";

  // Add the star to the stars element
  stars.appendChild(star);

  // Add a mouseover event listener to the star
  star.addEventListener("mouseover", () => {
    // Rotate the star
    star.style.rotate = `${
      Math.floor(Math.random(100) * 360) - randomAngle / 5
    }deg`;

    // Add the shootingStar class to the star
    star.classList.add("shootingStar");

    // Remove the star after 2 seconds
    setTimeout(() => {
      star.style.display = "none";
    }, 2000);
  });
}

// Generate 300 stars
for (let i = 0; i <= 300; i++) {
  generateStar();
}

setTimeout(() => {
  const h1 = document.getElementById("twoSec");
  stars.removeChild(h1);
}, 2000);

//SWIPER - https://codepen.io/ecemgo/pen/ZEVojzN
var swiper = new Swiper(".swiper2", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
  invert: false,
},
});