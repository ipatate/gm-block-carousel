import Siema from "siema";

const initCarousel = () => {
  const c_car = document.querySelectorAll(".gm-carousel-bloc-container");

  if (c_car) {
    const count = c_car.length;
    for (let i = 0; i < count; ++i) {
      const hasDot = c_car[i].dataset.dot;
      const hasArrow = c_car[i].dataset.arrow;
      // find container
      const car = c_car[i].querySelector(".gm-carousel-container");
      // previous btn
      const previous = c_car[i].querySelector(".gm-carousel-arrow-previous");
      // next btn
      const next = c_car[i].querySelector(".gm-carousel-arrow-next");
      // dot
      const dot = c_car[i].querySelectorAll(".gm-carousel-dot");
      // items
      const cell = c_car[i].querySelectorAll(".gm-carousel-cell");
      // if not already inited
      if (car.dataset.isInit !== true && cell.length > 0) {
        const carousel = new Siema({
          selector: car,
          onInit: () => {
            let isFocus = false;
            // set init to true
            car.dataset.isInit = true;
            // get first div items, not .gm-carousel-cell
            const items = car.querySelector("div:first-child").childNodes;
            // init arrow btn
            previous.setAttribute("tabindex", "-1");
            previous.setAttribute("disabled", true);
            previous.classList.add("gm-arrow-disabled");
            next.setAttribute("tabindex", "-1");
            next.setAttribute("disabled", true);
            next.classList.add("gm-arrow-disabled");
            // if more than one item active next btn
            if (items.length > 0) {
              next.classList.remove("gm-arrow-disabled");
              next.removeAttribute("disabled");
              next.setAttribute("tabindex", "0");
            }
            // remove float and hide all items
            for (let a = 0; a < items.length; ++a) {
              items[a].style.float = null;
              cell[a].setAttribute("aria-hidden", true);
            }
            //  aria hidden false for first element
            cell[0].setAttribute("aria-hidden", false);
            // if dot display
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
                const f = (remove = false) => {
                  if (isFocus === false) {
                    document.addEventListener("keydown", e => {
                      // left arrow pressed
                      if (
                        e.keyCode === 37 &&
                        i !== 0 &&
                        dot[i - 1] !== undefined
                      ) {
                        dot[i].setAttribute("tabindex", -1);
                        dot[i - 1].setAttribute("tabindex", 0);
                        dot[i - 1].focus();
                      } else if (
                        // right arrow pressed
                        e.keyCode === 39 &&
                        i !== count &&
                        dot[i + 1] !== undefined
                      ) {
                        dot[i].setAttribute("tabindex", -1);
                        dot[i + 1].setAttribute("tabindex", 0);
                        dot[i + 1].focus();
                      }
                    });
                    isFocus = true;
                  }
                  if (remove) {
                    isFocus = false;
                  }
                };
                dot[i].addEventListener("focus", () => f());
                dot[i].addEventListener("focusout", () => f(true));
              }
            }
          },
          onChange: () => {
            const countCell = cell.length;
            // all cell with aria-hidden true
            for (let i = 0; i < countCell; ++i) {
              cell[i].setAttribute("aria-hidden", true);
            }
            // aria-hidden false for current
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
