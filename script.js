"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenModals = document.querySelectorAll(".show-modal");

const closeWindow = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openWindow = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModals.length; i++) {
  const element = btnOpenModals[i];

  element.addEventListener("click", openWindow);
}

btnClose.addEventListener("click", closeWindow);

overlay.addEventListener("click", closeWindow);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeWindow();
});
