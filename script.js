"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenModals = document.querySelectorAll(".show-modal");

const windowSuper = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnOpenModals.length; i++) {
  const element = btnOpenModals[i];

  element.addEventListener("click", windowSuper);
}

btnClose.addEventListener("click", windowSuper);

overlay.addEventListener("click", windowSuper);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    windowSuper();
});
