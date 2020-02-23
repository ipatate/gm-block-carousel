import Siema from "siema";

const initCarousel = () => {
  const c_car = document.querySelectorAll(".gm-carousel-bloc-container");

  if (c_car) {
    const count = c_car.length;
    for (let i = 0; i < count; ++i) {
      const hasDot = c_car[i].dataset.dot;
      const hasArrow = c_car[i].dataset.arrow;
      // find element
      const car = c_car[i].querySelector(".gm-carousel-container");
      const previous = c_car[i].querySelector(".gm-carousel-arrow-previous");
      const next = c_car[i].querySelector(".gm-carousel-arrow-next");
      const dot = c_car[i].querySelectorAll(".gm-carousel-dot");
      if (car.dataset.isInit !== true) {
        const carousel = new Siema({
          selector: car,
          onInit: () => {
            car.dataset.isInit = true;
            // remove float
            const items = car.querySelector("div:first-child").childNodes;
            for (let a = 0; a < items.length; ++a) {
              items[a].style.float = null;
            }
            if (hasDot === "true") {
              dot[0].classList.add("gm-carousel-dot-current");
              const count = dot.length;
              // listener on dot
              for (let i = 0; i < count; ++i) {
                dot[i].addEventListener("click", () => {
                  carousel.goTo(i);
                });
              }
            }
          },
          onChange: () => {
            if (hasDot === "true") {
              const count = dot.length;
              for (let i = 0; i < count; ++i) {
                dot[i].classList.remove("gm-carousel-dot-current");
              }
              dot[carousel.currentSlide].classList.add(
                "gm-carousel-dot-current"
              );
            }
          }
        });
        if (hasArrow === "true") {
          previous.addEventListener("click", () => {
            carousel.prev();
          });
          next.addEventListener("click", () => {
            carousel.next();
          });
        }
      }
    }
  }
};
window.addEventListener("DOMContentLoaded", initCarousel);
