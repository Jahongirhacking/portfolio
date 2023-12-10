import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// ELEMENTS
const navList = document.getElementById("nav__list") as HTMLUListElement;
const overlayMenuBar = document.getElementById(
  "nav__overlay-menu-bars"
) as HTMLElement;
const imageShadow = document.querySelector(
  ".header__img > .header__img-shadow"
) as HTMLDivElement;
const leetcodeIcon = document.querySelector(
  ".header__link > img.fa-leetcode"
) as HTMLElement & { complete: boolean };
let isWindowResized: boolean = false;

// FUNCTIONS

const modifyTextContent = (element: HTMLElement, text: string): void => {
  element.textContent = text;
};

const toggleElementClassList = (
  element: HTMLElement,
  classname: string
): void => {
  element.classList.toggle(classname);
};

const controlKeyboard = (e: KeyboardEvent) => {
  if (e.key === "Escape" && overlayMenuBar.classList.contains("fa-xmark"))
    showOverlay();
};

const fixElementsPosition = (): void => {
  // image green shadow make circle
  imageShadow.style.height = imageShadow.offsetWidth + "px";

  // leetcode icon size
  leetcodeIcon.style.width =
    Math.max(
      (document.querySelector(".header__link > i") as HTMLElement).offsetWidth -
        7,
      30
    ) + "px";

  const grandparentElem = document.querySelectorAll(
    ".header__list"
  )[2] as HTMLLIElement;
  leetcodeIcon.style.marginTop =
    (grandparentElem.offsetHeight - leetcodeIcon.offsetHeight) / 2 + "px";
};

const controlWindowSize = (): void => {
  fixElementsPosition();
  // Media Queries
  if (window.innerWidth < 820) {
    navList.classList.add("hidden");
    navList.classList.add("overlay");
    overlayMenuBar.classList.remove("fa-xmark");
    overlayMenuBar.classList.add("fa-bars");
    overlayMenuBar.classList.remove("hidden");
    // Make overlay hidden if one button is clicked
    if (!isWindowResized) {
      isWindowResized = true;
      Array.from(document.querySelectorAll(".overlay>li>a")).forEach((elem) =>
        (elem as HTMLElement).addEventListener("click", (e: MouseEvent) => {
          e.stopPropagation();
          const grandParent = (e.target as HTMLElement)?.parentElement
            ?.parentElement;
          if (grandParent?.classList.contains("overlay")) showOverlay();
        })
      );
    }
  } else {
    navList.classList.remove("hidden");
    navList.classList.remove("overlay");
    overlayMenuBar.classList.add("hidden");
  }
};

function showOverlay(): void {
  toggleElementClassList(navList, "hidden");
  toggleElementClassList(overlayMenuBar, "fa-bars");
  toggleElementClassList(overlayMenuBar, "fa-xmark");
}

const main = (): void => {
  const currentDate = new Date();

  // Modify Document
  controlWindowSize();
  modifyTextContent(
    document.getElementById("my-age") as HTMLSpanElement,
    (currentDate.getFullYear() - 2004).toString()
  );
  modifyTextContent(
    document.getElementById("current__year") as HTMLSpanElement,
    currentDate.getFullYear().toString()
  );
  //   EventListeners
  overlayMenuBar.addEventListener("click", showOverlay);

  (
    document.querySelector(".header__img > .header__my-img") as HTMLImageElement
  ).addEventListener("mouseover", () =>
    imageShadow.classList.add("scale-element")
  );
  (
    document.querySelector(".header__img > .header__my-img") as HTMLImageElement
  ).addEventListener("mouseout", () =>
    imageShadow.classList.remove("scale-element")
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
