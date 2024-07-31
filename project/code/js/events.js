const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentSlide = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector(".slides").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

showSlide(currentSlide);
