const myEmail = "j.hayitov@innopolis.university";
const baseUrl = new URL("https://fwd.innopolis.university/api/");
const generatorBtn = document.getElementById("generator-btn");
const comicImg = document.getElementById("comic-img");
const comicTitle = document.getElementById("comic-title");
const comicDate = document.getElementById("comic-date");

const generateRGB = () => {
  const rgbValues = new Array();
  for (let i = 0; i < 3; i++) rgbValues.push(Math.floor(Math.random() * 256));
  return rgbValues.join(", ");
};

const generateDegree = () => {
  return Math.floor(Math.random() * 360);
};

const generateBackgroundGradient = () => {
  document.body.style.background = `linear-gradient(${generateDegree()}deg, rgb(${generateRGB()}), rgb(${generateRGB()}))`;
};

const hideElements = (elems) => {
  elems.forEach((elem) => {
    elem.classList.add("hidden");
  });
};

const showElements = (elems) => {
  elems.forEach((elem) => {
    elem.classList.remove("hidden");
  });
};

const fetchImageId = async () => {
  const idUrl = new URL("./hw2", baseUrl);
  const searchParam = new URLSearchParams();
  searchParam.append("email", myEmail);
  return await fetch(`${idUrl}?${searchParam.toString()}`)
    .then((res) => res.json())
    .catch();
};

const fetchImageInfo = async (imgId) => {
  const imgUrl = new URL("./comic", baseUrl);
  const searchParam = new URLSearchParams();
  searchParam.append("id", imgId);
  return await fetch(`${imgUrl}?${searchParam.toString()}`)
    .then((res) => res.json())
    .catch();
};

const updateUI = (imgInfo) => {
  comicImg.setAttribute("alt", imgInfo.alt);
  comicImg.setAttribute("src", imgInfo.img);
  comicTitle.textContent = imgInfo.safe_title;
  const date = new Date(
    imgInfo.year,
    Number.parseInt(imgInfo.month) - 1,
    imgInfo.day
  );
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  comicDate.textContent = date.toLocaleDateString("en-US", options);
};

const generateImage = async () => {
  try {
    document.querySelector(".img-loader").classList.remove("hidden");
    // TODO: get all info about the image
    const imgId = await fetchImageId();
    const imgInfo = await fetchImageInfo(imgId);
    // render it
    updateUI(imgInfo);
    // It's taking some time to load image from url
    // So I'm using timout for loader
    setTimeout(() => {
      document.querySelector(".img-loader").classList.add("hidden");
      generateBackgroundGradient();
    }, 500);
  } catch (err) {
    throw new Error("Error! Cannot fetch the image, maybe a wrong url", err);
  }
};

// Events
document.addEventListener("DOMContentLoaded", generateImage);
generatorBtn.addEventListener("click", generateImage);
comicImg.addEventListener("mouseover", () => {
  showElements([comicTitle, document.querySelector(".comic-date-wrapper")]);
});
comicImg.addEventListener("mouseout", () => {
  hideElements([comicTitle, document.querySelector(".comic-date-wrapper")]);
});
document
  .querySelector(".sensitive-content__btn")
  .addEventListener("click", () =>
    hideElements([document.querySelector(".sensitive-content")])
  );
