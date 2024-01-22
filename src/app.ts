import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import langObject from "./langs";

// Language
const langVariants = {
  langs: ["eng", "uzb", "deu"],
  current: 0,
};
let currentLang: "eng" | "deu" | "uzb" = "eng";
let currentLangObject = langObject[currentLang];

const updateDocumentContent = () => {
  // Nav
  const navLink = Array.from(document.querySelectorAll(".nav__link"));
  navLink[0].innerHTML =
    currentLangObject.nav.latest + `<span class="badge new-badge">new</span>`;
  navLink[1].textContent = currentLangObject.nav.about;
  navLink[2].textContent = currentLangObject.nav.portfolio;
  navLink[3].textContent = currentLangObject.nav.skills;
  navLink[4].textContent = currentLangObject.nav.contact;
  document
    .querySelector(".nav__lang")!
    .setAttribute("src", `./img/Languages/${currentLangObject.flag}`);
  // Hero
  const spans = Array.from(document.querySelectorAll(".header__info > span"));
  spans[0].textContent = currentLangObject.hero.span1;
  spans[1].textContent = currentLangObject.hero.span2;
  document.querySelector(".header__my-name")!.textContent =
    currentLangObject.hero.fullname;
  document.querySelector(".header__my-job")!.textContent =
    currentLangObject.hero.job;
  // About
  document.querySelector(".about_me__title")!.textContent =
    currentLangObject.about.title;
  document.querySelector(".about_me__info")!.textContent =
    currentLangObject.about.info;
  document.querySelector(".about_me__link")!.textContent =
    currentLangObject.about.btn;
  // Portfolio
  document.querySelector(".portfolio__heading")!.textContent =
    currentLangObject.portfolio.title;
  const projects = Array.from(document.querySelectorAll(".portfolio__project"));
  projects.forEach((project, index) => {
    project.querySelector(".portfolio__title")!.textContent =
      currentLangObject.portfolio.projects[index].name;
    project.querySelector(".portfolio__info")!.textContent =
      currentLangObject.portfolio.projects[index].description;
  });
  projects[projects.length - 1].querySelector(".demo-link")!.innerHTML =
    currentLangObject.portfolio.projects[projects.length - 1].btn ||
    "Click To See";
  // Achievements
  document.querySelector(".achievements__title")!.textContent =
    currentLangObject.achievements.title;
  const achievementsInfo = Array.from(
    document.querySelectorAll(".achievements__card > .card__info")
  );
  achievementsInfo.forEach((achievementInfo, index) => {
    achievementInfo.textContent = currentLangObject.achievements.cert[index];
  });
  // Skills
  document.querySelector(".skills__title")!.textContent =
    currentLangObject.skills.title;
  document.querySelector(".skills__using__title")!.textContent =
    currentLangObject.skills.now;
  document.querySelector(".skills__learning__title")!.textContent =
    currentLangObject.skills.learn;
  document.querySelector(".skills__others__title")!.textContent =
    currentLangObject.skills.other;
  // Contact
  document.querySelector(".footer__title")!.textContent =
    currentLangObject.contact.title;
  document.querySelector(".footer__made-heart")!.innerHTML =
    currentLangObject.contact.made;
  document.querySelector(".footer__small > span")!.textContent =
    currentLangObject.contact.last;
  document.getElementById("current__year")!.textContent = new Date()
    .getFullYear()
    .toString();
};

const changeLanguage = () => {
  langVariants.current = (langVariants.current + 1) % langVariants.langs.length;
  currentLang = langVariants.langs[langVariants.current] as
    | "eng"
    | "deu"
    | "uzb";
  currentLangObject = langObject[currentLang];
  updateDocumentContent();
};

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
  if (window.innerWidth < 900) {
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

  // Language
  updateDocumentContent();
  document
    .querySelector(".nav__lang")!
    .addEventListener("click", changeLanguage);

  // Modify Document
  controlWindowSize();
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
