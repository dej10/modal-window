"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenModals = document.querySelectorAll(".show-modal");

// if you're selecting a class that has one or more elements using it, query selector will only select the first one and that's all
// it's better to use query selector all for class names that are assigned to more than one html elements

// console.log(btnOpenModals); // output is an array( not exactly an array but it works like an array) so ! this result gotten from the querySelectorALL can be looped.

const closeWindow = () => {
  // function was common so it was brought out of the event scope and now can be reused
  modal.classList.add("hidden"); // the classlist add method adds classes to the html element
  overlay.classList.add("hidden");
};

const openWindow = () => {
  modal.classList.remove("hidden"); // the classlist.remove method removes a class to the  html element
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModals.length; i++) {
  // the "array"  can be looped
  const element = btnOpenModals[i];

  element.addEventListener("click", openWindow); // function is not called only declared or defined

  //   console.log(element.textContent); // text content can be accessed after it has been lopped
}

btnClose.addEventListener("click", closeWindow); // function does not need to be called, JS engine will run/ call the function by itself.

overlay.addEventListener("click", closeWindow);

// how to add keyboard listeners
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeWindow();

  // console.log(modal.classList.contains("hidden"));  // returns true when window is closed returns false when the window is closing cuz of the ESC key
  // class list contains checks whether thr class you've given it is in the classlist works like includes for arrays, ?? probably returns a boolean, yes it does return a boolean of true or false.
  // NB: the NOT ! operator, so if there is NO hidden class, hide but if there is a hidden class do nothing.
  //   NB && combines two decisions
});
