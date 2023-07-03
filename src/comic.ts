import moment from "moment";
const myEmail = "j.hayitov@innopolis.university";
const baseUrl = new URL("https://fwd.innopolis.university/api/");
const generatorBtn = document.getElementById("generator-btn");
const comicImg = document.getElementById("comic-img") as HTMLImageElement;
const comicTitle = document.getElementById("comic-title") as HTMLHeadingElement;
const comicDate = document.getElementById("comic-date") as HTMLSpanElement;

const generateRGB = () => {
  const rgbValues = new Array();
  for (let i = 0; i < 3; i++) rgbValues.push(Math.floor(Math.random() * 256));
  return rgbValues.join(", ");
};

const generateDegree = ():number => {
  return Math.floor(Math.random() * 360);
};

const generateBackgroundGradient = () => {
  document.body.style.background = `linear-gradient(${generateDegree()}deg, rgb(${generateRGB()}), rgb(${generateRGB()}))`;
};

const hideElements = (elems:HTMLElement[]) => {
  elems.forEach((elem:HTMLElement) => {
    elem.classList.add("hidden");
  });
};

const showElements = (elems:HTMLElement[]) => {
  elems.forEach((elem:HTMLElement) => {
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

const fetchImageInfo = async (imgId:string) => {
  const imgUrl = new URL("./comic", baseUrl);
  const searchParam = new URLSearchParams();
  searchParam.append("id", imgId);
  return await fetch(`${imgUrl}?${searchParam.toString()}`)
    .then((res) => res.json())
    .catch();
};

interface IimgInfo {
  alt : string,
  img : string,
  safe_title : string,
  year : string,
  month : string,
  day : string 
}

const updateUI = (imgInfo : IimgInfo) => {
  comicImg.setAttribute("alt", imgInfo.alt);
  comicImg.setAttribute("src", imgInfo.img);
  comicTitle.textContent = imgInfo.safe_title;
  const date = moment(`${imgInfo.year}-${imgInfo.month}-${imgInfo.day}`);
  (document.getElementById("reslease-time") as HTMLSpanElement).textContent = date.fromNow();
  comicDate.textContent = date.format("LL");
};

const generateImage = async () => {
  try {
    const imageLoader: HTMLDivElement | null = document.querySelector(".img-loader");
    imageLoader?.classList.remove("hidden");
    // TODO: get all info about the image
    const imgId = await fetchImageId();
    const imgInfo = await fetchImageInfo(imgId);
    // render it
    updateUI(imgInfo);
    // It's taking some time to load image from url
    // So I'm using timout for loader
    setTimeout(() => {
      imageLoader?.classList.add("hidden");
      generateBackgroundGradient();
    }, 500);
  } catch (err) {
    console.error("Error! Cannot fetch the image, maybe a wrong url", (err as Error).message);
  }
};

// Events
document.addEventListener("DOMContentLoaded", generateImage);
(generatorBtn as HTMLButtonElement).addEventListener("click", generateImage);
comicImg.addEventListener("mouseover", () => {
  showElements([comicTitle, document.querySelector(".comic-date-wrapper") as HTMLElement]);
});
comicImg.addEventListener("mouseout", () => {
  hideElements([comicTitle, document.querySelector(".comic-date-wrapper") as HTMLElement]);
});
(document?.querySelector(".sensitive-content__btn") as HTMLButtonElement)
  .addEventListener("click", () =>
    hideElements([document.querySelector(".sensitive-content") as HTMLDivElement])
  );
