// script.js
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

// Create dots based on the number of slides
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => moveSlideTo(index));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Move the slides container to show the current slide
  document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;

  // Update the dot indicators
  updateDots();
}

function moveSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}

function moveSlideTo(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Initialize the slider and dots
createDots();
showSlide(slideIndex);
