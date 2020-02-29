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
      const cell = c_car[i].querySelectorAll(".gm-carousel-cell");
      if (car.dataset.isInit !== true) {
        const carousel = new Siema({
          selector: car,
          onInit: () => {
            car.dataset.isInit = true;
            const items = car.querySelector("div:first-child").childNodes;
            // set arrow btn
            previous.setAttribute("tabindex", "-1");
            previous.setAttribute("disabled", true);
            previous.classList.add("gm-arrow-disabled");
            next.setAttribute("tabindex", "-1");
            next.setAttribute("disabled", true);
            next.classList.add("gm-arrow-disabled");
            if (items.length > 0) {
              next.classList.remove("gm-arrow-disabled");
              next.removeAttribute("disabled");
              next.setAttribute("tabindex", "0");
            }
            // remove float
            for (let a = 0; a < items.length; ++a) {
              items[a].style.float = null;
              cell[a].setAttribute("aria-hidden", true);
            }
            // show aria first element
            cell[0].setAttribute("aria-hidden", false);
            if (hasDot === "true") {
              dot[0].classList.add("gm-carousel-dot-current");
              dot[0].setAttribute("tabindex", 0);
              dot[0].setAttribute("aria-selected", true);
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
            const countCell = cell.length;
            // cell
            for (let i = 0; i < countCell; ++i) {
              cell[i].setAttribute("aria-hidden", true);
            }
            cell[carousel.currentSlide].setAttribute("aria-hidden", false);

            /** btn arrow */
            previous.setAttribute(
              "tabindex",
              carousel.currentSlide > 0 ? "0" : -1
            );
            if (carousel.currentSlide > 0) {
              previous.removeAttribute("disabled");
              previous.classList.remove("gm-arrow-disabled");
            } else {
              previous.setAttribute("disabled", true);
              previous.classList.add("gm-arrow-disabled");
            }
            if (carousel.currentSlide === countCell - 1) {
              next.setAttribute("disabled", true);
              next.classList.add("gm-arrow-disabled");
            } else {
              next.removeAttribute("disabled");
              next.classList.remove("gm-arrow-disabled");
            }

            if (countCell > 0) {
              next.setAttribute(
                "tabindex",
                carousel.currentSlide !== countCell - 1 ? "0" : -1
              );
            }
            /** dot */
            if (hasDot === "true") {
              const count = dot.length;
              for (let i = 0; i < count; ++i) {
                dot[i].setAttribute("tabindex", -1);
                dot[i].setAttribute("aria-selected", false);
                dot[i].classList.remove("gm-carousel-dot-current");
              }
              const current = dot[carousel.currentSlide];
              current.classList.add("gm-carousel-dot-current");
              current.setAttribute("tabindex", 0);
              current.setAttribute("aria-selected", true);
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
