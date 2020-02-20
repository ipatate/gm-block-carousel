import Siema from "siema";

const initCarousel = () => {
  const car = document.querySelectorAll(".gm-carousel-container");

  if (car) {
    const count = car.length;
    for (let i = 0; i < count; ++i) {
      new Siema({
        selector: car[i]
      });
    }
  }
};
window.addEventListener("DOMContentLoaded", initCarousel);
