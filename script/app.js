// ELEMENTS
const navList = document.getElementById("nav__list");
const overlayMenuBar = document.getElementById("nav__overlay-menu-bars");
const imageShadow = document.querySelector(
  ".header__img > .header__img-shadow"
);
const leetcodeIcon = document.querySelector(".header__link > img.fa-leetcode");
let isWindowResized = false;

// FUNCTIONS

const modifyTextContent = (element, text) => {
  element.textContent = text;
};

const toggleElementClassList = (element, classname) => {
  element.classList.toggle(classname);
};

const addElementClassList = (element, classname) => {
  element.classList.add(classname);
};

const removeElementClassList = (element, classname) => {
  element.classList.remove(classname);
};

const addEventListenerToElem = (element, eventType, fn) => {
  element.addEventListener(eventType, fn);
};

const controlKeyboard = (e) => {
  if (e.key === "Escape" && overlayMenuBar.classList.contains("fa-xmark"))
    showOverlay();
};

const fixElementsPosition = () => {
  // image green shadow make circle
  imageShadow.style.height = imageShadow.offsetWidth + "px";

  // leetcode icon size
  leetcodeIcon.style.width =
    Math.max(document.querySelector(".header__link > i").offsetWidth - 7, 30) +
    "px";

  leetcodeIcon.style.marginTop =
    (leetcodeIcon.parentElement.parentElement.offsetHeight -
      leetcodeIcon.offsetHeight) /
      2 +
    "px";
};

const controlWindowSize = () => {
  fixElementsPosition();
  // Media Queries
  if (window.innerWidth < 700) {
    navList.classList.add("hidden");
    navList.classList.add("overlay");
    overlayMenuBar.classList.remove("fa-xmark");
    overlayMenuBar.classList.add("fa-bars");
    overlayMenuBar.classList.remove("hidden");
    // Make overlay hidden if one button is clicked
    if (!isWindowResized) {
      isWindowResized = true;
      Array.from(document.querySelectorAll(".overlay>li>a")).forEach((elem) =>
        addEventListenerToElem(elem, "click", (e) => {
          e.stopPropagation();
          const grandParent = e.target.parentElement.parentElement;
          if (grandParent.classList.contains("overlay")) showOverlay();
        })
      );
    }
  } else {
    navList.classList.remove("hidden");
    navList.classList.remove("overlay");
    overlayMenuBar.classList.add("hidden");
  }
};

function showOverlay() {
  toggleElementClassList(navList, "hidden");
  toggleElementClassList(overlayMenuBar, "fa-bars");
  toggleElementClassList(overlayMenuBar, "fa-xmark");
}

const main = () => {
  const currentDate = new Date();

  // Modify Document
  controlWindowSize();
  modifyTextContent(
    document.getElementById("my-age"),
    currentDate.getFullYear() - 2004
  );
  modifyTextContent(
    document.getElementById("current__year"),
    currentDate.getFullYear()
  );
  //   EventListeners
  addEventListenerToElem(overlayMenuBar, "click", showOverlay);
  addEventListenerToElem(
    document.querySelector(".header__img > .header__my-img"),
    "mouseover",
    () => imageShadow.classList.add("scale-element")
  );
  addEventListenerToElem(
    document.querySelector(".header__img > .header__my-img"),
    "mouseout",
    () => imageShadow.classList.remove("scale-element")
  );
};

document.addEventListener("DOMContentLoaded", main);
window.addEventListener("resize", controlWindowSize);
document.addEventListener("keyup", controlKeyboard);
if (leetcodeIcon.complete) fixElementsPosition();
else leetcodeIcon.addEventListener("load", fixElementsPosition);

// I USED GSAP FOR BALLS ANIMATION

gsap.registerPlugin(MotionPathPlugin);

gsap.to(".number-1", {
  duration: 15,
  stagger: 1,
  repeat: -1,
  yoyo: true,
  motionPath: "#path1",
});
gsap.to(".number-2", {
  duration: 16,
  stagger: 1,
  repeat: -1,
  yoyo: true,
  motionPath: "#path2",
});
gsap.to(".number-3", {
  duration: 20,
  stagger: 1,
  repeat: -1,
  yoyo: true,
  motionPath: "#path3",
});
